import * as C from './styled';
import {Item} from "../../types/Item";
import {TableItem} from "../TableItem/TableItem"

type listProps = {
    list: Item[];
}

export const TableArea = ({list}: listProps) => {

    console.log("TEST", list);
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
                {list.map((item: Item, index: number) =>(
                    <TableItem key={index} item={item} />
                ))}

            </tbody>
        </C.Table>
    )
}