import React from 'react'
import SuperSlide from '../src/components/SuperSlide'
import { shallow, mount } from 'enzyme'

describe('SuperSlide', () => {
  const mock = {
    title: 'Test',
    subtitle: 'Substitle',
    color: 'color',
    content: [() => {}, () => {}]
  }

  it('should render', () => {
    const wrapper = shallow(<SuperSlide {...mock} />)
    expect(wrapper).toMatchSnapshot()
  })
})