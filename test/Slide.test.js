import React from 'react'
import Slide from '../src/components/Slide'
import { shallow, mount } from 'enzyme'

describe('Slide', () => {
  const mock = {
    title: 'Test',
    subtitle: 'Substitle',
    color: 'color',
    content: () => {}
  }

  it('should render', () => {
    const wrapper = shallow(<Slide {...mock} />)
    expect(wrapper).toMatchSnapshot()
  })
})