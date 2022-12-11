import { useEffect, useState } from 'react';

import * as C from './App.styled'
import { Category } from './types/Category';
import { category } from './data/categories';
import { Item } from './types/Item';
import { items } from './data/items';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TeblaArea';


const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, seCurrentMonth] = useState(getCurrentMonth);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth])

  console.log(filteredList);
  

  return (
    <C.Container>

      <C.Header>
        <C.HeaderText>
            Finance System
        </C.HeaderText>        
      </C.Header>

      <C.Body>
         <TableArea/>
      </C.Body>
    </C.Container>
  )  
}
export default App;