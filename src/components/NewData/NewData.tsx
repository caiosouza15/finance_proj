import * as C from './styled';
import {items} from '../../data/items'
import {ItemType} from '../../types/Item'
import React, { useRef, useState } from 'react';
import { categories } from '../../data/categories';

type typeProps = {
  onAdd: (items: ItemType) => void;
  // list: ItemType[];
}

export const NewData = ({onAdd}: typeProps,  ) => {

  const [newDate, setNewDate] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newValue, setNewValue] = useState(0);

  const clearFields = () => {
    setNewDate('');
    setNewCategory('');
    setNewTitle('');
    setNewValue(0);
  }
    
  const categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if(newDate === ''){
      errors.push("You must enter a date");
    }

    if(!categoryKeys.includes(newCategory)){
      errors.push("Please enter a valid category!");
    }
    
    if(newTitle === ''){
      errors.push("Please enter a title");
    }

    if(newValue <= 0){
      errors.push("Please enter a value");
    }

    if(errors.length > 0){
      alert(errors.join("\n"));

    }else {

      onAdd({
        date: new Date(newDate),
        category: newCategory,
        title: newTitle,
        value: newValue
      });

      clearFields();
    }
  };
  
    return (
      <C.Container>
        <C.FormArea>

          <C.InputLabel>
            <C.InputTitle>Date</C.InputTitle>
            <C.Input  
              type="date" 
                value={newDate} 
                onChange={e => setNewDate(e.target.value)}/>
          </C.InputLabel>         
            
          <C.InputLabel>
            <C.InputTitle>Category</C.InputTitle>           
               <C.Select value={newCategory}  onChange={(e) =>  setNewCategory(e.target.value)}>  
               <option></option>
                {categoryKeys.map((item, index) => (
                  <option 
                    key={index}
                    value={item}
                 >{item}</option>
                ))}
              </C.Select>            
          </C.InputLabel>


          <C.InputLabel>
            <C.InputTitle>Title</C.InputTitle>
            <C.Input  
             type="text" 
             value={newTitle} 
             onChange={e => setNewTitle(e.target.value)}/>
          </C.InputLabel>

          <C.InputLabel>
            <C.InputTitle>Value</C.InputTitle>
            <C.Input  
             type="text" 
             value={newValue} 
             onChange={e => setNewValue(parseFloat(e.target.value))}/>
          </C.InputLabel>   

          <C.buttonArea>
            <C.button type="submit" onClick={handleAddEvent}>Send</C.button>  
          </C.buttonArea>     
            
        </C.FormArea>
        
      </C.Container>
    )
}