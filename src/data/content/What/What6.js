import React from 'react'
import { Title } from 'bloomer'
import slide from '../../../assets/slide.png'

const What6 = () => (
  <div>
    <Title className="has-text-weight-light is-size-2 is-size-4-mobile">What are those objects?</Title>
    <Title className="has-text-weight-light is-size-4 is-size-6-mobile">Each object creates a slide in your deck. With sample information, it looks like this.</Title>
    <img src={slide} />
  </div>
)

export default What6
