import styled from "styled-components";

export const Container = styled.div`
       margin-top: 30px;
       background-color: #fff;
       border-radius: 5px;
       box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, 
       rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
       padding-bottom: 10px;
    `;

export const FormArea = styled.div`
    display: flex;     
`;

export const InputLabel = styled.label`
    padding: 10px;
`;

export const InputTitle = styled.div`
    padding: 10px 0;
`;

export const Input = styled.input`
     padding: 5px;
     font-size: 18px;
     border-width: 1px;
     border-radius: 4px;
     border-color: #CCCCCC;
     background-color: #FFFFFF;     
 `;

 export const Select = styled.select`
    padding: 5px;
    width: 150px;
    font-size: 18px;
    border-width: 1px;
    border-radius: 4px;
    border-color: #CCCCCC;
    background-color: #FFFFFF;
 `;

export const buttonArea = styled.div`
    display: flex;
    align-items: center;
    padding: 7px;
    margin-top: 35px;   
`;

export const button = styled.button`
    width: 80px;
    height: 40px;
    background-color: rgba(51, 51, 51, 0.05);
    border-radius: 4px;
    border-width: 0;
    color: #333333;
    cursor: pointer;
    display: inline-block;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    list-style: none;
    margin: 0;
    padding: 10px 12px;
    text-align: center;
    transition: all 200ms;
    vertical-align: baseline;
    white-space: nowrap;
    user-select: none;
    webkit-user-select: none;
`;

