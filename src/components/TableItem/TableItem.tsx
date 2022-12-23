import * as C from './styles'
import {Item} from "../../types/Item";
import { formatDateToBrazilianFormat } from "../../Util/helpers";
import { categories } from "../../data/categories"

type ItemProps = {
    item: Item;
}
export const TableItem= ({item}: ItemProps) => {
    const getColor = categories[item.category].color;   

    return(
        <C.TableLine>
            <C.TableColumn>{formatDateToBrazilianFormat(item.date)}</C.TableColumn>

            <C.TableColumn>
                <C.Category color={getColor}>
                    {categories[item.category].title}                    
                </C.Category>                
            </C.TableColumn>

            <C.TableColumn>{item.title}</C.TableColumn>

            <C.TableColumn>
                <C.Value color={getColor}>
                    ${item.value.toFixed(2)}
                    </C.Value>
            </C.TableColumn>
            
        </C.TableLine>
    );
}