import products from './items/item-list';
import { Item } from '../types/types';

export const getNamesForFilters = (filterParameter: string) => {
    const newArr: string[] = [];
    products.forEach((element: Item) => {
        if (!newArr.includes(element[filterParameter] as string)) newArr.push(element[filterParameter] as string);
    });

    return newArr;
};

export const getNumbersForFilters = (filterParameter: string) => {
    const newArr: number[] = [];
    products.forEach((element: Item) => {
        if (!newArr.includes(element[filterParameter] as number)) newArr.push(element[filterParameter] as number);
    });
    newArr.sort((a, b) => {
        return a > b ? 1 : b > a ? -1 : 0;
    });

    return [...new Set(newArr)];
};
