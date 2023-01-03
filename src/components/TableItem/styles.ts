import styled from "styled-components";



export const TableRow = styled.tr``;

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

export const TableColumn = styled.td<{width? : number}>`
    padding: 5px;
    width: ${props => props.width ? `${props.width}px` : 'auto'};
`;

export const Category = styled.div<{color: string}>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.color};
`;

export const Value = styled.div<{color: string}>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.color};
`;
export const Button = styled.button`
    width: 40px;
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
    margin: 5px;
    text-align: center;
    transition: all 200ms;
    vertical-align: baseline;
    white-space: nowrap;
    user-select: none;
    webkit-user-select: none;
`;
