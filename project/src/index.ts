import './style.css';
import { getFilteredItems } from './conponents/filtration';
import { getNamesForFilters } from './conponents/filters';
import { sortItemArray } from './conponents/sort';
import products from './conponents/items/item-list';
import { Item } from './types/types';
import { createItem } from './conponents/add-items-to-list';

const newrw: HTMLDivElement = document.querySelector('.main__item-list')!;
newrw.append(createItem(products[0]));

console.log(createItem(products[0]));
