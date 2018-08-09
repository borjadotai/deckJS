import React from 'react'
import { Title } from 'bloomer'
import hello from '../../../assets/battery.svg'

const Power = () => (
  <div>
    <img src={hello} style={{width: '15rem', margin: '0 0 2rem 0'}} />
    <Title className="has-text-weight-light is-size-4 is-size-6-mobile">You can create your slides content as a react components.</Title>
    <Title className="has-text-weight-light is-size-4 is-size-6-mobile">Then pass it as props to your slide in the store.</Title>
    <Title className="has-text-weight-light is-size-4 is-size-6-mobile">We know, is damn good.</Title>
  </div>
)
export default Power
