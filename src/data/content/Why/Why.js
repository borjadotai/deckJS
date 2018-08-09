import React from 'react'
import { Title } from 'bloomer'
import presentation from '../../../assets/presentation.svg'

const Why = () => (
  <div>
    <img src={presentation} style={{width: '7rem', margin: '0 0 2rem 0'}} />
    <Title className="has-text-weight-light is-size-4 is-size-6-mobile">Many times we create websites to share information.</Title>
    <Title className="has-text-weight-light is-size-4 is-size-6-mobile">Why are we not using a good information sharing format then!?</Title>
  </div>
)
export default Why
