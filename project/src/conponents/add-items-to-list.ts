import { Item } from '../types/types';

export const createItem = (item: Item) => {
    const itemContainer: HTMLDivElement = document.createElement('div');
    itemContainer.classList.add('item-list_item__container');
    itemContainer.style.backgroundImage = `url('${item.thumbnail}')`;

    const itemInfoContainer: HTMLDivElement = document.createElement('div');
    itemInfoContainer.classList.add('item-list_item__info_container');
    itemContainer.append(itemInfoContainer);

    const itemTitle: HTMLDivElement = document.createElement('div');
    itemTitle.classList.add('item-list_item__title');
    itemInfoContainer.append(itemTitle);
    itemTitle.innerText = item.title;

    const itemInfo: HTMLDivElement = document.createElement('div');
    itemInfo.classList.add('item-list_item__info');
    itemInfoContainer.append(itemInfo);

    const itemInfoTextCategory: HTMLDivElement = document.createElement('div');
    itemInfoTextCategory.classList.add('item-list_item__info_text');
    itemInfo.append(itemInfoTextCategory);

    const itemInfoTitleCategory: HTMLDivElement = document.createElement('div');
    itemInfoTitleCategory.classList.add('item-list_item__info_title');
    itemInfoTextCategory.append(itemInfoTitleCategory);
    itemInfoTitleCategory.innerText = 'Category:';

    const itemInfoInfoCategory: HTMLDivElement = document.createElement('div');
    itemInfoInfoCategory.classList.add('item-list_item__info_info');
    itemInfoTextCategory.append(itemInfoInfoCategory);
    itemInfoInfoCategory.innerText = item.category;

    const itemInfoTextBrand: HTMLDivElement = document.createElement('div');
    itemInfoTextBrand.classList.add('item-list_item__info_text');
    itemInfo.append(itemInfoTextBrand);

    const itemInfoTitleBrand: HTMLDivElement = document.createElement('div');
    itemInfoTitleBrand.classList.add('item-list_item__info_title');
    itemInfoTextBrand.append(itemInfoTitleBrand);
    itemInfoTitleBrand.innerText = 'Brand:';

    const itemInfoInfoBrand: HTMLDivElement = document.createElement('div');
    itemInfoInfoBrand.classList.add('item-list_item__info_info');
    itemInfoTextBrand.append(itemInfoInfoBrand);
    itemInfoInfoBrand.innerText = item.brand;

    const itemInfoTextPrice: HTMLDivElement = document.createElement('div');
    itemInfoTextPrice.classList.add('item-list_item__info_text');
    itemInfo.append(itemInfoTextPrice);

    const itemInfoTitlePrice: HTMLDivElement = document.createElement('div');
    itemInfoTitlePrice.classList.add('item-list_item__info_title');
    itemInfoTextPrice.append(itemInfoTitlePrice);
    itemInfoTitlePrice.innerText = 'Category:';

    const itemInfoInfoPrice: HTMLDivElement = document.createElement('div');
    itemInfoInfoPrice.classList.add('item-list_item__info_info');
    itemInfoTextPrice.append(itemInfoInfoPrice);
    itemInfoInfoPrice.innerText = String.fromCharCode(8364) + String(item.price) + '.00';

    const itemInfoTextRating: HTMLDivElement = document.createElement('div');
    itemInfoTextRating.classList.add('item-list_item__info_text');
    itemInfo.append(itemInfoTextRating);

    const itemInfoTitleRating: HTMLDivElement = document.createElement('div');
    itemInfoTitleRating.classList.add('item-list_item__info_title');
    itemInfoTextRating.append(itemInfoTitleRating);
    itemInfoTitleRating.innerText = 'Rating:';

    const itemInfoInfoRating: HTMLDivElement = document.createElement('div');
    itemInfoInfoRating.classList.add('item-list_item__info_info');
    itemInfoTextRating.append(itemInfoInfoRating);
    itemInfoInfoRating.innerText = String(item.rating);

    const itemInfoTextDiscount: HTMLDivElement = document.createElement('div');
    itemInfoTextDiscount.classList.add('item-list_item__info_text');
    itemInfo.append(itemInfoTextDiscount);

    const itemInfoTitleDiscount: HTMLDivElement = document.createElement('div');
    itemInfoTitleDiscount.classList.add('item-list_item__info_title');
    itemInfoTextDiscount.append(itemInfoTitleDiscount);
    itemInfoTitleDiscount.innerText = 'Discount:';

    const itemInfoInfoDiscount: HTMLDivElement = document.createElement('div');
    itemInfoInfoDiscount.classList.add('item-list_item__info_info');
    itemInfoTextDiscount.append(itemInfoInfoDiscount);
    itemInfoInfoDiscount.innerText = String(item.discountPercentage);

    const itemInfoTextStock: HTMLDivElement = document.createElement('div');
    itemInfoTextStock.classList.add('item-list_item__info_text');
    itemInfo.append(itemInfoTextStock);

    const itemInfoTitleStock: HTMLDivElement = document.createElement('div');
    itemInfoTitleStock.classList.add('item-list_item__info_title');
    itemInfoTextStock.append(itemInfoTitleStock);
    itemInfoTitleStock.innerText = 'Stock:';

    const itemInfoInfoStock: HTMLDivElement = document.createElement('div');
    itemInfoInfoStock.classList.add('item-list_item__info_info');
    itemInfoTextStock.append(itemInfoInfoStock);
    itemInfoInfoStock.innerText = String(item.stock);

    const itemButtonsContainer: HTMLDivElement = document.createElement('div');
    itemButtonsContainer.classList.add('item-list_item__buttons_container');
    itemContainer.append(itemButtonsContainer);

    const itemAddButton: HTMLDivElement = document.createElement('div');
    itemAddButton.classList.add('item-list_item__add_button');
    itemAddButton.classList.add('button');
    itemButtonsContainer.append(itemAddButton);
    itemAddButton.innerText = 'ADD TO CARD';

    const itemDetailsButton: HTMLDivElement = document.createElement('div');
    itemDetailsButton.classList.add('item-list_item__details_button');
    itemDetailsButton.classList.add('button');
    itemButtonsContainer.append(itemDetailsButton);
    itemDetailsButton.innerText = 'DETAILS';

    return itemContainer;
};
