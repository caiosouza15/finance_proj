import {Item} from '../types/Item'

const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

export const filterListByMonth = (list: Item[], date: string ): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for(let i in list){
        if(list[i].date.getFullYear() === parseInt(year)){
            newList.push(list[i]);
        }
    }

    return newList;
};

export const FormatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');
    return `${months[parseInt(month) -1]} de ${year}`;
}