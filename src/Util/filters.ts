import {Item} from '../types/Item'

export const filterListByMonth = (list: Item[], date: string ): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');
    console.log(list);

    for(let i in list){
        if(list[i].date.getFullYear() === parseInt(year)){
            newList.push(list[i]);
        }
    }

    console.log("newList",newList);

    return newList;
};