import React from 'react'
import { Title } from 'bloomer'
import carlton from '../../../assets/carlton.gif'

const What7 = () => (
  <div>
    <Title className="has-text-weight-light is-size-2 is-size-4-mobile">You also talked about components... </Title>
    <Title className="has-text-weight-light is-size-4 is-size-6-mobile">Of course! Because the coolest thing about DeckJS</Title>
    <Title className="has-text-weight-light is-size-4 is-size-6-mobile">is that the content of your slides are... </Title>
    <img src={carlton} />
    <Title className="has-text-weight-light is-size-3 is-size-5-mobile">REACT COMPONENTS! </Title>
  </div>
)

export default What7
