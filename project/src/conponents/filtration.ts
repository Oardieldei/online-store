import products from './items/item-list';
import { Item } from '../types/types';

export const getFilteredItems = (
    categoryCheckedArray: string[],
    brandChechedArray: string[],
    minPrice: number,
    maxPrice: number,
    minStock: number,
    maxStock: number,
    inputValue: string
) => {
    const newArr: Item[] = products.filter((element: Item) => {
        const isCategoryTrue: boolean = !categoryCheckedArray[0] || categoryCheckedArray.includes(element.category);
        const isBrandTrue: boolean = !brandChechedArray[0] || brandChechedArray.includes(element.brand);
        const isPriceTrue: boolean = element.price >= minPrice && element.price <= maxPrice;
        const isStockTrue: boolean = element.stock >= minStock && element.stock <= maxStock;

        const titleLower: string = element.title.toLowerCase();
        const descriptionLower: string = element.description.toLowerCase();
        const brandLower: string = element.brand.toLowerCase();
        const categoryLower: string = element.category.toLowerCase();
        const inputLower: string = inputValue.toLowerCase();
        const isInputTrue: boolean =
            inputValue === '' ||
            titleLower.search(inputLower) !== -1 ||
            descriptionLower.search(inputLower) !== -1 ||
            brandLower.search(inputLower) !== -1 ||
            categoryLower.search(inputLower) !== -1;

        return isCategoryTrue && isBrandTrue && isPriceTrue && isStockTrue && isInputTrue;
    });

    return newArr;
};
