import { DropdownItem } from "@/components/inputs/select/select";

interface ApiMaterialData {
    id: string,
    materialName: string
}

class MaterialsDal {

    constructor(){

    }

    fromDal( data: Array<ApiMaterialData> ): Array<DropdownItem>{

        const dal = data.map((itm, idx) => {

            return{
                value: itm.id,
                displayName: itm.materialName
            }
        })

        return dal;
    };
}

export const materialDal = new MaterialsDal();