import React from 'react'
import { Title, Subtitle, Container } from 'bloomer'

const SlideTitle = ({ title, subtitle }) => {
  return (
    <Container className="text">
      <Title className="has-text-weight-light is-size-1 is-size-3-mobile">
        {title}
      </Title>
      <Subtitle className="is-uppercase has-text-weight-light is-size-5 is-size-6-mobile" style={{padding: '.5rem 0 0 .3rem'}}>
        {subtitle}
      </Subtitle>
    </Container>
  )
}

export default SlideTitle
