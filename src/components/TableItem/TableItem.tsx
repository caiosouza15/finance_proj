import { useContext, useState } from 'react';

import * as C from './styles'
import {ItemType} from "../../types/Item";
import { formatDateToBrazilianFormat } from "../../Util/helpers";
import { categories } from "../../data/categories"
import { ListActions } from "../../context/Context"
import { EditNote, Delete } from '@styled-icons/material'


type ItemProps = {
    item: ItemType[],
    indexItem: (index: number) => void,
}
export const TableItem = ({item}: ItemProps, {indexItem}: ItemProps) => { 


    const deleteItem = (index: number) => {
        let currentIndex = index;
        console.log(currentIndex);
        if(window.confirm("Do you really want to delete this item?")){
            indexItem(currentIndex as number)
        }        
    }

    return(        
        <>
            <C.Table>
            <thead>
                <tr>
                    <C.TableHeaderColumn width={100}>Date</C.TableHeaderColumn>
                    <C.TableHeaderColumn width={130}>Category</C.TableHeaderColumn>
                    <C.TableHeaderColumn>Title</C.TableHeaderColumn>
                    <C.TableHeaderColumn width={150}>Value</C.TableHeaderColumn>
                </tr>
            </thead>
           
            <tbody>
                {item.map((item, index) => (
                    <C.TableRow key={index}>
                        <C.TableColumn >
                            {formatDateToBrazilianFormat(item.date)}
                        </C.TableColumn>

                        <C.TableColumn>
                            <C.Category color={"red"}>{item.category}</C.Category>
                        </C.TableColumn>

                        <C.TableColumn> 
                            {item.title}
                        </C.TableColumn>

                        <C.TableColumn>

                        <C.Value color={"blue"}>
                            ${item.value.toFixed(2)}
                            </C.Value>
                        </C.TableColumn>

                        <C.TableColumn width={100}>
                        <C.Button onClick={() => alert("HA HA, This feature is coming soon")}> <EditNote size="20"/> </C.Button>
                        <C.Button onClick={() => alert("HA HA, This feature is coming soon")}> < Delete size="20" /> </C.Button>
                        </C.TableColumn>    
                        
                    </C.TableRow>               
                    ))} 
                </tbody>
            </C.Table>                             
        </>        
    );
}