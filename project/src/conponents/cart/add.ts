import { Item } from '../../types/types';
import { CartItem } from '../../types/types';

export const addItemToCart = (addingItem: Item) => {
    const newItem: CartItem = { item: addingItem, count: 1, price: addingItem.price };
    return newItem;
};
