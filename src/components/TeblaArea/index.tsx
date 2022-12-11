import * as C from './styled'


export const TableArea = () => {
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

            </tbody>
        </C.Table>
    )
}