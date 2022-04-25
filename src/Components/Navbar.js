import React from 'react'
import { Container } from './Styles/Container.styled'
import { Flex } from './Styles/Flex.styled'
import { Button } from './Styles/Button.styled'
import { StyledHeader,Logo,Nav,Image } from "./Styles/Header.styled"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <StyledHeader bg = "red">
      <Container>
        <Nav>
        <Logo src = "./Images/Logo.png" alt=""/>
        <Link to="/Authentication"><Button bg="white" className="sign up">Sign up</Button></Link>
        </Nav>
        <Flex>
          <div>
            <h1>What is Poll It and what makes it Best?</h1>

            <p>
            This is Poll It and built to understand peoples way of thinking by making them answer a few questions.This the Best website to get insights over all your doubts.Here you can clear all your query through public opinion and get your question answered by people.What are you waiting for create your survey.
            </p>
            <Button bg= "#f720c2">
              Create a poll
            </Button>
          </div>
            <Image src="./Images/main.svg" alt=""/>
        </Flex>
      </Container>
    </StyledHeader>
  )
}
