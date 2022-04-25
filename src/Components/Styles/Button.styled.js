import styled from "styled-components"

export const Button = styled.button`
    border-radius : 50px;
    border : none;
    box-shadow : 0 0 10px rgba(0,0,0,0.15);
    cursor : pointer;
    font-size : 15px;
    font-weight : 700;
    padding : 15px 70px;
    margin :  auto 10px ;
    background-color : ${({ bg })=> bg || "white"};
    color : ${({ color })=> color || "black"};
    align-self : flex-end;

    &:hover{
        opacity : 0.95;
        transform : scale(0.97)
    }

    .sign in {
        float:left;
    }

    @media (max-width: ${({ theme })=> theme.mobile}){
        flex-direction:column;
        text-align:center
`