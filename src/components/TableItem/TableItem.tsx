import * as C from './styles'
import {Item} from "../../types/Item";
import { formatDateToBrazilianFormat, formatCashValue } from "../../Util/helpers";

type ItemProps = {
    item: Item;
}
export const TableItem= ({item}: ItemProps) => {
    return(
        <C.TableLine>
            <C.TableColumn>{formatDateToBrazilianFormat(item.date)}</C.TableColumn>
            <C.TableColumn>{item.category}</C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>{formatCashValue(item.value)}</C.TableColumn>
        </C.TableLine>
    );
}