import styled from "styled-components";

export const Container = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;    
`;

export const Header = styled.div`
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 60%, rgba(0,212,255,1) 100%);
    height: 150px;
    width: 100%;   
    text-align: center;
    border-radius: 13px 15px 50px 50px / 1px 0px 25px 25px;
`;

export const HeaderText = styled.div`
    margin: 0;
    padding: 0;
    color: #FFF;
    padding-top: 30px;    
    font-size: 25px;
`;

export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
    
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px 50px;
`;

export const AddNewDataButton = styled.button`
        height: 40px;
        width: 180px;    
        align-items: center;
        background-color: #747272;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: .25rem;
        box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
        box-sizing: border-box;
        color: #E6E6E6;
        cursor: pointer;
        display: inline-flex;
        font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 16px;
        font-weight: 600;
        justify-content: center;
        line-height: 1.25;
        margin: 0;
        min-height: 3rem;
        padding: calc(.875rem - 1px) calc(1.5rem - 1px);
        position: relative;
        text-decoration: none;
        transition: all 250ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: baseline;
        width: auto;     
      
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