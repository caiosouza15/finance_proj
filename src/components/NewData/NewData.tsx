import * as C from './styled';


export const NewData = () => {
    return (
      <C.Container>
        <C.FormArea>
            <form>
                <input type="date" placeholder='Date'></input>
                <input type="text" placeholder='Category'></input>
                <input type="text" placeholder='Title'></input>
                <input type="text" placeholder='Value'></input>
            </form>
        </C.FormArea>
        
      </C.Container>
    )
}