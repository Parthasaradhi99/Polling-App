import React from 'react'
import { Container } from "./Styles/Container.styled.js"
import Content from "../Content"
import Card from "./Card"

export default function MainContent() {
  return (
    <div>
      <Container bg="#d1fffa" color="black">
      {Content.map((item,index)=>(
        <Card key={index} item={item}/>))}
    </Container>
    </div>
  )
}
