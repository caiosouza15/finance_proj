import { useEffect, useState } from 'react';

import * as C from './App.styled'
import { Category } from './types/Category';
import { Item } from './types/Item';
import { items } from './data/items';
import { getCurrentMonth } from './Util/helpers';
import TableArea from './components/TeblaArea';
import {filterListByMonth} from './Util/filters'
import InfoArea, {} from "./components/InfoArea"
import { categories } from './data/categories';
import NewData from './components/NewData';

const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, seCurrentMonth] = useState(getCurrentMonth);
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {

    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value
      } else{
        incomeCount += filteredList[i].value
      }       
    }

    setIncome(incomeCount)
    setExpense(expenseCount);
  }, [filteredList]);
  

  const handleMonthChange = (newMonth: string) => {
    seCurrentMonth(newMonth);
  };

  return (
    <C.Container>

      <C.Header>
        <C.HeaderText>
            Finance System
        </C.HeaderText>        
      </C.Header>

      <C.Body>
        <InfoArea 
        currentMonth={currentMonth} 
        onMonthChange={handleMonthChange} 
        income={income} 
        expense={expense}
        />

         <TableArea list={filteredList}/>

        <C.ContainerButton>
          <C.AddNewDataButton>NEW DATA</C.AddNewDataButton>
        </C.ContainerButton>
         

         <NewData />

      </C.Body>
    </C.Container>
  )  
}
export default App;