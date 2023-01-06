import products from './items/item-list';
import { Item } from '../types/types';
import { Filter } from '../types/types';

// собираем данные по бренду 'brand' / категрии 'category' и получаем: список брендов/категорий и количество товаров в каждом пункте
export const getNamesForFilters = (filterParameter: string) => {
    const namesArr: string[] = [];
    const newArr: Filter[] = [];
    products.forEach((element: Item) => {
        if (!namesArr.includes(element[filterParameter] as string)) {
            namesArr.push(element[filterParameter] as string);
            newArr.push({ name: element[filterParameter] as string, fullCount: 1 });
        } else {
            newArr.forEach((el) => {
                if (el.name === element[filterParameter]) el.fullCount++;
            });
        }
    });

    return newArr;
};

// собираем цену 'price' / количество на складе 'stock' и получаем: отсортированный массив с уникальными значениями,  
// т.е. 1 элемент — минимальное значение, последний — максимальное, length массива — количество вариантов
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
