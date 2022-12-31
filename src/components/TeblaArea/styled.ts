import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 0px 10px #CCC;
    border-radius: 10px;
    margin-top: 30px;
    font-family: system-ui;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, 
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    
    
`;

export const TableHeaderColumn = styled.th<{width? : number}>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px 10px;
    text-align: left;
`;

