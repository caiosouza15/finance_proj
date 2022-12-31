import * as C from './styled';
import {ItemType} from "../../types/Item";
import {TableItem} from "../TableItem/TableItem"

type listProps = {
    list: ItemType[];
}

export const TableArea = ({list}: listProps) => { 

    return (
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
                {
                    <TableItem  />
                    
                }

            </tbody>
        </C.Table>
    )
}