import { CartItem } from '../../types/types';

export const oneMore = (whatItem: CartItem) => {
    if (whatItem.count === whatItem.item.stock) {
        console.log('Столько товара на складе нет.');
        return;
    } else {
        whatItem.count++;
        whatItem.price = whatItem.price * whatItem.count;
    }
};

// добавить проверку на удаление товара из корзины, если < 1
export const oneLess = (whatItem: CartItem) => {
    whatItem.count--;
    whatItem.price = whatItem.price * whatItem.count;
};
