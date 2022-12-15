import { useEffect, useState } from 'react';

import * as C from './App.styled'
import { Category } from './types/Category';
import { category } from './data/categories';
import { Item } from './types/Item';
import { items } from './data/items';
import { getCurrentMonth } from './Util/helpers';
import TableArea from './components/TeblaArea';
import {filterListByMonth} from './Util/filters'

const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, seCurrentMonth] = useState(getCurrentMonth);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]) 

  return (
    <C.Container>

      <C.Header>
        <C.HeaderText>
            Finance System
        </C.HeaderText>        
      </C.Header>

      <C.Body>
         <TableArea list={filteredList}/>
      </C.Body>
    </C.Container>
  )  
}
export default App;