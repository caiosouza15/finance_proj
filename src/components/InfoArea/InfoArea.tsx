import * as C from "./styles";
import {FormatCurrentMonth} from "../../Util/filters";
import ResumeItem from "../ResumeItem";
 

type currentMonthProps = {
    currentMonth : string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({currentMonth, expense, income ,onMonthChange }: currentMonthProps) => {

    const handlePreviousMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth(currentDate.getMonth() -1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`);
    };

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth(currentDate.getMonth() +1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`);
    }

    const balance = income - expense;

    const definedColor = balance < 0 ? '#8B0000' : '#000';

    return(
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePreviousMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{FormatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth} >➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea> 
                <ResumeItem title="Revenues"  value={income}/>
                <ResumeItem title="Expenditure" value={expense}/>
                <ResumeItem title="Balance" value={balance} color={definedColor}/>
            </C.ResumeArea>
        </C.Container>
    );
}
