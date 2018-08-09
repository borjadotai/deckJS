import React from 'react'
import { Title } from 'bloomer'
import store from '../../../assets/store.svg'

const What5 = () => (
  <div>
    <Title className="has-text-weight-light is-size-2 is-size-4-mobile">Step 3: Create your store</Title>
    <Title className="has-text-weight-light is-size-4 is-size-6-mobile">The store is the skeleton of your deck. It is where everything lives.</Title>
    <img src={store} />
  </div>
)

export default What5
