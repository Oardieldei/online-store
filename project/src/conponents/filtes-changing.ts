import { getNumbersForFilters } from './filters';

// const categoryFilterChecked: string[] = [];						// массив с выбранными фильтрами категории
// const brandFilterChecked: string[] = [];							// массив с выбранными фильтрами компаний
// const inputFilterValue = '';													// переменная для строки поиска

const defaultPriceArray: number[] = getNumbersForFilters('price');
const defaultStockArray: number[] = getNumbersForFilters('stock');
const numberFiltersArray: number[] = [
    defaultPriceArray[0], // min price
    defaultPriceArray[defaultPriceArray.length - 1], // max price
    defaultStockArray[0], // min stock
    defaultStockArray[defaultStockArray.length - 1], // max stock
];

// добавляем новый фильтр в массив (фильтр: 'Apple'/'smartphones'/etc, тип: 'brand'/'category')
const addNewStringFilter = (newFilter: string, filterType: string[]) => {
    filterType.push(newFilter);
};

// аналогично удаляем с проверкой на наличие
const removeStringFilter = (badFilter: string, filterType: string[]) => {
    if (!filterType.includes(badFilter)) {
        console.log('Something goes wrong. You can not delete this filter.');
        return;
    }

    filterType.splice(filterType.indexOf(badFilter), 1);
};

// меняем значения мин/макс при использовании ползунков (значение: 1/2/10/100/etc, индекс в массиве: 0 - мин цена, 1 - макс цена, 2 - мин на складе, 3 - макс на складе)
const changeNumberFilter = (newValue: number, filterTypeIndex: number) => {
    numberFiltersArray[filterTypeIndex] = newValue;
};
