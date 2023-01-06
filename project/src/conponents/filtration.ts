import products from './items/item-list';
import { Item } from '../types/types';

export const getFilteredItems = (
    categoryCheckedArray: string[], // массив с выбранными фильтрами категории
    brandChechedArray: string[], // массив с выбранными фильтрами компаний
		numbersArray: number[], // числовой массив: [0] - мин цена, [1] - макс цена, [2] - мин на складе, [3] - макс на складе
    inputValue: string // строка поиска
) => {
    const newArr: Item[] = products.filter((element: Item) => {
        const isCategoryTrue: boolean = !categoryCheckedArray[0] || categoryCheckedArray.includes(element.category); // соответствует ли категория ИЛИ ничего не выбрано
        const isBrandTrue: boolean = !brandChechedArray[0] || brandChechedArray.includes(element.brand);	// соответствует ли компания ИЛИ ничего не выбрано
        const isPriceTrue: boolean = element.price >= numbersArray[0] && element.price <= numbersArray[1]; // цена в выбранном диалазоне
        const isStockTrue: boolean = element.stock >= numbersArray[2] && element.stock <= numbersArray[3]; // количество на вкладе в выбранном диапазоне

        const titleLower: string = element.title.toLowerCase(); 
        const descriptionLower: string = element.description.toLowerCase();
        const brandLower: string = element.brand.toLowerCase();
        const categoryLower: string = element.category.toLowerCase();
        const inputLower: string = inputValue.toLowerCase(); // хуй знает, почему не работает в строке, пришлось добавить переменные
        const isInputTrue: boolean =
            inputValue === '' || // пустое значение
            titleLower.search(inputLower) !== -1 || // ИЛИ слово есть в названии товара
            descriptionLower.search(inputLower) !== -1 || // ИЛИ слово есть в описании
            brandLower.search(inputLower) !== -1 || // ИЛИ слово есть в названии компании
            categoryLower.search(inputLower) !== -1; // ИЛИ слово есть в категории

        return isCategoryTrue && isBrandTrue && isPriceTrue && isStockTrue && isInputTrue; // оставляем только те товары, которые подходят по всем пунктам
    });

    return newArr;
};
