'use client'
import { categoryApi } from '@/api/categories/categories.api';
import { colorsApi } from '@/api/colors/colors.api';
import { materialsApi } from '@/api/materials/materials.api';
import { productApi } from '@/api/product/products.api';
import MultiSelect from '@/components/inputs/multiSelect/multiSelect';
import SelectDropDownInput from '@/components/inputs/select/select';
import { FormEvent, useEffect, useState } from 'react';


type formStateType = {
    productName: string
    materialId: string
    subCatId: string
    genderId: string
    price: string
    desc: string
    catId: string
    files: FileList | null
    colorIds: Array<string>
}

const formKeys = Object.freeze({
    productName:'productName',
    materialId: 'materialId',
    subCatId: 'subCatId',
    genderId: 'genderId',
    price: 'price',
    desc: 'desc',
    catId: 'catId',
    files: 'files',
    colorIds: 'colorIds'
})


const testGender = [
    {
        value: '',
        displayName: 'Select a gender',
    },
    {
        value: '1',
        displayName: 'Women',
    },
    {
        value: '2',
        displayName: 'Men',
    }
];

const ProductUpload = () => {

    const [ formState, setFormState ] = useState<formStateType>({
        productName:'',
        materialId: '',
        subCatId: '',
        genderId: '',
        price: '',
        desc: '',
        catId: '',
        colorIds: [],
        files: null,
    });

    const [ colors, setColors ] = useState<[]>([]);
    const [ categories, setCategories ] = useState([]);
    const [ subCategories, setSubCategories ] = useState([]);
    const [ genders, setGenders ] = useState([]);
    const [ materials, setMaterials ] = useState([]);
    
    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {

        const formKey = event.target.name;
        const value = event.target.value;
        const file = event.target instanceof HTMLInputElement && event.target.files ? event.target.files : null;
        
        console.log(event.target.value, event.target.name)
        setFormState(prevState => {
            const updatedArray = formState.colorIds.includes(value)
                ? formState.colorIds.filter(itm => itm !== value)
                : [...prevState.colorIds, value];
        
            const result = file ? file : (formKey === formKeys.colorIds ? updatedArray : value);
        
            return {
                ...prevState,
                [formKey]: result
            };
        });
        
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        //validate inputs

        productApi.createProduct({
            body: formState,
            callback: () => {},
        })

    }

    useEffect(() => {

        Promise.all([
            colorsApi.getColors({ callback: setColors, isDropDown: true }),
            materialsApi.getMaterials({ callback: setMaterials, isDropDown: true }),
        ]);
        
        return () => {
            colorsApi.abort();
            materialsApi.abort();
        };

    },[]);
    
    useEffect(() => {

        if(formState.genderId){

            setFormState(prevState => ({
                ...prevState,
                catId: '',
                subCatId: ''
            }));

            categoryApi.getCategoriesByGenderId({
                genderId: formState.genderId,
                callback: setCategories
            });
        }

        if(formState.genderId == ''){
            setCategories([])
            setSubCategories([])
        };

        return () => categoryApi.abort()


    },[formState.genderId]);

    useEffect(() => {

        if(formState.catId){


            setFormState(prevState => ({
                ...prevState,
                subCatId: ''
            }));

            categoryApi.getSubCategoriesByCategoryId({
                categoryId: formState.catId,
                genderId: formState.genderId,
                callback: setSubCategories
            });
             
        };

        return () => {
            categoryApi.abort()
        }


    },[formState.catId]);
    console.log(categories)
    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div>
                <label htmlFor={formKeys.productName}>Product Name</label>
                <input type='text' id={formKeys.productName} name={formKeys.productName} onChange={handleFormChange} />
            </div>
            
            <SelectDropDownInput 
                isDisabled={false}
                inputNameAttribute={formKeys.materialId}
                inputValueAttribute={formState.materialId}
                onChangeHandler={handleFormChange}
                dropDownArray={materials}
                labelTitle='Materials'
            />

            <SelectDropDownInput
                key={formState.genderId} 
                isDisabled={false}
                inputNameAttribute={formKeys.genderId}
                inputValueAttribute={formState.genderId}
                onChangeHandler={handleFormChange}
                dropDownArray={testGender}
                labelTitle='Gender'
            />

            <SelectDropDownInput
                isDisabled={!formState.genderId ? true : false}
                inputNameAttribute={formKeys.catId}
                inputValueAttribute={formState.catId}
                onChangeHandler={handleFormChange}
                dropDownArray={categories}
                labelTitle='Category'
            />

            <SelectDropDownInput
                isDisabled={!formState.catId || !formState.genderId ? true : false}
                inputNameAttribute={formKeys.subCatId}
                inputValueAttribute={formState.subCatId}
                onChangeHandler={handleFormChange}
                dropDownArray={subCategories}
                labelTitle='Sub Category'
            />


            <div>
                <label htmlFor={formKeys.colorIds}>Colors</label>
                <MultiSelect 
                    options={colors}
                    formChangeHandler={handleFormChange}
                    inputName={formKeys.colorIds}
                    
                />
            </div>
            
            
            <div>
                <label htmlFor='price'>Price</label>
                <input type='text' id='price' name='price' onChange={handleFormChange} />
            </div>
            
            <div>
                <label htmlFor={formKeys.desc}>Description</label>
                <textarea id={formKeys.desc} name={formKeys.desc} onChange={handleFormChange}></textarea>
            </div>

            <div>
                <label htmlFor={formKeys.files}>Images</label>
                <input type='file' name={formKeys.files} multiple onChange={handleFormChange}/>
            </div>
            
            <button type='submit'>Submit</button>
        </form>
    )
};


export default ProductUpload;

