import styled from "styled-components";



export const Container = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    height: 100vh;
    background-color: #F8F8FF;
`;

export const Header = styled.div`
    background: rgb(2,0,36);
    height: 150px;
    width: 100%;   
    text-align: center;
    border-radius: 13px 15px 50px 50px / 1px 0px 25px 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 15px;
`;

export const HeaderText = styled.div`
    height: 100%;
    color: #FFF;
    padding-top: 30px;    
    font-size: 40px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;    
`;