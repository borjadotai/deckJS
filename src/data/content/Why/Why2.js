import React from 'react'
import { Title, Columns, Column } from 'bloomer'
import personal from '../../../assets/radio-host.svg'
import product from '../../../assets/hand.svg'
import story from '../../../assets/magician.svg'

const Why2 = () => (
  <div>
    <Columns>
      <Column>
        <Title className="has-text-weight-light is-size-4 is-size-6-mobile">New Product</Title>
        <img src={product} style={{width: '10rem'}} />
      </Column>
      <Column>
        <Title className="has-text-weight-light is-size-4 is-size-6-mobile">Personal Web</Title>
        <img src={personal} style={{width: '10rem'}} />
      </Column>
      <Column>
        <Title className="has-text-weight-light is-size-4 is-size-6-mobile">Exciting Story</Title>
        <img src={story} style={{width: '10rem'}} />
      </Column>
    </Columns>
    <Title className="has-text-weight-light is-size-4 is-size-6-mobile">If you want to share something and you could do it as a presentation</Title>
    <Title className="has-text-weight-light is-size-4 is-size-6-mobile">Make a presentation, make a web, make a Deck!</Title>
  </div>
)
export default Why2
