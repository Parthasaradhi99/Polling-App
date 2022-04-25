import styled from "styled-components"

export const StyledHeader = styled.header`
    background-color: ${({ theme })=> theme.colors.header };
    padding :  40px 0;
`

export const Nav = styled.nav`
display : flex;
align-items :center;
justify-content : space-between;
margin-bottom : 40px;

@media (max-width: ${({ theme })=> theme.mobile}){
    flex-direction:column;
    text-align:center
};
`

export const Logo = styled.img`
margin-left : 15px;
@media (max-width: ${({ theme })=> theme.mobile}){
    margin-bottom:40px;
    text-align:center
};
`

export const Image = styled.img`
    width: 400px;
    margin-left:40px;

    @media (max-width: ${({ theme })=> theme.mobile}){
        flex-direction:column;
        margin: 10px 0;
    };
`