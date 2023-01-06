import products from './items/item-list';
import { Item } from '../types/types';
import { getNamesForFilters } from './filters';
import { getNumbersForFilters } from './filters';

// const categoryFilterChecked: string[] = [];						// массив с выбранными фильтрами категории
// const brandFilterChecked: string[] = [];							// массив с выбранными фильтрами компаний

const defaultPriceArray: number[] = getNumbersForFilters('price');
const defaultStockArray: number[] = getNumbersForFilters('stock');
const numberFiltersArray: number[] = [
	defaultPriceArray[0],																// min price
	defaultPriceArray[defaultPriceArray.length - 1],		// max price
	defaultStockArray[0],																// min stock
	defaultStockArray[defaultStockArray.length - 1]			// max stock
]

// const inputFilterValue = '';													// переменная для строки поиска

const addNewStringFilter = (newFilter: string, filterType: string[]) => {
	filterType.push(newFilter)
}

const removeStringFilter = (badFilter: string, filterType: string[]) => {
	if (!filterType.includes(badFilter)) {
		console.log('Something goes wrong. You can not delete this filter.');
		return;
	}

	filterType.splice(filterType.indexOf(badFilter), 1);
}

const changeNumberFilter = (newValue: number, filterTypeIndex: number) => {
	numberFiltersArray[filterTypeIndex] = newValue;
}