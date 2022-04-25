import React from 'react'
import { Container } from "./Styles/Container.styled"
import { Flex } from "./Styles/Flex.styled"
import { StyledFooter } from "./Styles/Footer.styled"
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./Images/Poll it.svg" alt="" />
      <Flex>
        <ul>
          <li>What is poll it?</li>
          <li> About me</li>
          <li>Contact me</li>
        </ul>
        <ul>
          <li>Analytics</li>
          <li>Create survey</li>
          <li>Answer survey</li>
        </ul>
        <ul>
          <li>About me</li>
          <li>M.Partha saradhi</li>
          <li>Electrical Engineering</li>
        </ul>
        <SocialIcons/>
      </Flex>
      <p>&copy; 2022 Poll It. Partha Saradhi All Rights Reserved</p>
      </Container> 
    </StyledFooter>
  )
}
