import { Item } from '../../types/types';

export const addItemToCart = (addingItem: Item) => {
    return { item: addingItem, count: 1, price: addingItem.price };
};
