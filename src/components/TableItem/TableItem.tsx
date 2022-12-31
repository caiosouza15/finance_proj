import { useContext } from 'react';

import * as C from './styles'
import {ItemType} from "../../types/Item";
import { formatDateToBrazilianFormat } from "../../Util/helpers";
import { categories } from "../../data/categories"
import { ListActions } from "../../context/Context"

type ItemProps = {
    item: ItemType;
}
export const TableItem= () => {
    
    const itemList = useContext(ListActions);

    return(        
        <>
            {itemList.map((item, index) => (
                <C.TableRow key={index}>
                    <C.TableColumn >
                        {formatDateToBrazilianFormat(item.date)}
                    </C.TableColumn>

                    <C.TableColumn key={index}>
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
                </C.TableRow>               
				))}                              
        </>        
    );
}