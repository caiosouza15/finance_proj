export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1};`
};

export const formatDateToBrazilianFormat = (data: Date): string => {
    let year = data.getFullYear();
    let month = data.getMonth() +1;
    let day = data.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

const addZeroToDate = (item: number) => item < 10 ? `0${item}` : item;

export const formatCashValue = (item: number) => `${item}$`

    
    
