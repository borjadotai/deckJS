import React from 'react'
import SlideTitle from '../src/components/SlideTitle'
import { shallow, mount } from 'enzyme'

describe('SlideTitle', () => {
  const mock = {
    title: 'title',
    subtitle: 'subtitle'
  }

  it('should render', () => {
    const wrapper = shallow(<SlideTitle {...mock} />)
    expect(wrapper).toMatchSnapshot()
  })
})