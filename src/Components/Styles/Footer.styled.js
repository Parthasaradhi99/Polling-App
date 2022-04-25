import styled from "styled-components"

export const StyledFooter = styled.div`
    background-color: #282828;
    color:white;
    padding : 10px 0 10px 0;

    img{
        width : 200px;
        text-align:center;};

    ul{
        list-style:none;
        align-items:space-around;
    };

    ul li{
        margin-bottom : 10px;
    };

    p{
        text-align : center;
    };

    @media (max-width: ${({ theme })=> theme.mobile}){
        flex-direction:column;
        text-align:center;
    ul{
        pading:0;
    };
       
`