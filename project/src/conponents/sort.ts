import { Item } from '../types/types';

export const sortItemArray = (
    someArray: Item[], // массив с товарами, который нужно сортировать
    sortValue: string, // ключ, по которому будет происходить сортировка 'price'/'rating' — значение числовое
    isReverse = false // необязательный параметр, если сортировка обратная, то передать true
) => {
    someArray.sort((a, b) => {
        return a[sortValue] > b[sortValue] ? 1 : b[sortValue] > a[sortValue] ? -1 : 0;
    });

    if (isReverse) someArray.reverse();

    return someArray;
};
