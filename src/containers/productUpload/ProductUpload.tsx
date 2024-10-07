'use client'
import { categoryApi } from '@/api/categories/categories.api';
import { colorsApi } from '@/api/colors/colors.api';
import { materialsApi } from '@/api/materials/materials.api';
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
    colorId: Array<String>
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
    colorId: 'colorId'
})

const ProductUpload = () => {

    const [ formState, setFormState ] = useState<formStateType>({
        productName:'',
        materialId: '',
        subCatId: '',
        genderId: '',
        price: '',
        desc: '',
        catId: '',
        colorId: [],
        files: null,
    });

    const [ colors, setColors ] = useState<[]>([]);
    const [ categories, setCategories ] = useState([]);
    const [ subCategories, setSubCategories ] = useState([]);
    const [ gender, setGender ] = useState([]);
    const [ materials, setMaterials ] = useState([]);
    
    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const formKey = event.target.name;
        const inputValue = event.target.value;
        const fileValue = (event.target instanceof HTMLInputElement) ? event.target.files : null;

        setFormState(preState => ({
            ...preState,
            [formKey]: fileValue ? fileValue : inputValue 
        }));

    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

    }

    useEffect(() => {

        Promise.all([
            colorsApi.getColors({ callback: setColors}),
            materialsApi.getMaterials({ callback: setMaterials }),
        ]);
        
        return () => {
            colorsApi.abort();
            materialsApi.abort();
        };

    },[]);

    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div>
                <label htmlFor={formKeys.productName}>Product Name</label>
                <input type='text' id={formKeys.productName} name={formKeys.productName} onChange={handleFormChange} />
            </div>
            
            <div>
                <label htmlFor={formKeys.materialId}>Material</label>
                <select id={formKeys.materialId} name={formKeys.materialId}>
                    <option value=''>Select Material</option>

                </select>
            </div>
            
            <div>
                <label htmlFor='genderId'>Gender</label>
                <select id='genderId' name='genderId'>
                    <option value=''>Select Gender</option>

                </select>
            </div>
            <div>
                <label htmlFor='catId'>Category</label>
                <select id='catId' name='catId'>
                    <option value=''>Select Category</option>

                </select>
            </div>
            <div>
                <label htmlFor='subCatId'>Sub Category</label>
                <select id='subCatId' name='subCatId'>
                    <option value=''>Select Sub Category</option>
            
                </select>
            </div>
            
            
            
            <div>
                <label htmlFor='price'>Price</label>
                <input type='number' id='price' name='price' onChange={handleFormChange} />
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