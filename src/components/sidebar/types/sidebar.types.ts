export interface SubCategory {
    id: number,
    subCategoryName: string
}

export interface Category {
    categoryId: number
    categoryName: string
    subCategories: Array<SubCategory>
}


