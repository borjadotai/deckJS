import React from 'react'
import { SlideTitle } from './'
import { Container, Hero, HeroBody } from 'bloomer'

const Slide = ({ title, subtitle, color, content, key }) => (
  <Hero isFullHeight isColor={color} key={key}>
    <HeroBody style={{ display: 'flex', flexDirection: 'column' }}>
      <SlideTitle title={title} subtitle={subtitle} />
      <Container hasTextAlign="centered">{content()}</Container>
    </HeroBody>
  </Hero>
)

export default Slide
