import products from './items/item-list';
import { Item } from '../types/types';

export const getNamesForFilters = (filterParameter: string) => {
    const newArr: string[] = [];
    products.forEach((element: Item) => {
        if (!newArr.includes(element[filterParameter] as string)) newArr.push(element[filterParameter] as string);
    });

    return newArr;
};
