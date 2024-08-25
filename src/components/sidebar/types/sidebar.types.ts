export interface SubCategory {
    id: number,
    subCategoryName: string
}

export interface Category {
    categoryName: string
    subCategories: Array<SubCategory>
}


