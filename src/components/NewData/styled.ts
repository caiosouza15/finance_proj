import styled from "styled-components";

export const Container = styled.div`
    
    `;

export const FormArea = styled.div`
    display: flex;    
    flex-direction: column;
   
`;

export const InputLabel = styled.label`
    padding: 10px;
`;

export const InputTitle = styled.div``;

export const Input = styled.input`
     padding: 5px;
     font-size: 18px;
     border-width: 1px;
     border-color: #CCCCCC;
     background-color: #FFFFFF;
     color: #000000;
     border-style: solid;
     border-radius: 5px;
     box-shadow: 0px 0px 5px rgba(66,66,66,.75);
     text-shadow: 0px 0px 5px rgba(66,66,66,.75);

    &:hover,
    &:focus {
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        color: rgba(0, 0, 0, 0.65);
      }
      
    &:hover {
        transform: translateY(-1px);
    }
      
    &:active {
        background-color: #F0F0F1;
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
        color: rgba(0, 0, 0, 0.65);
        transform: translateY(0);
    }
     

`;

export const buttonArea = styled.div``;

export const button = styled.button``;

