import React from 'react'
import Store from '../data/Store'
import { SuperSlide, Slide, Cover } from '../components'

const typeSelector = (slide) => {
  if (slide.super == '1') {
    return <SuperSlide
      title={slide.title}
      subtitle={slide.subtitle}
      color={slide.color}
      content={slide.content}
    />
  } else
  {
    return <Slide
      title={slide.title}
      subtitle={slide.subtitle}
      color={slide.color}
      content={slide.content}
    />
  }
}

const IndexPage = () => (
  <div>
    <Cover />
    {// Generate slides from textStore
      Store.map(slide => {return typeSelector(slide)})
    }
  </div>
)

export default IndexPage
