import React from 'react'
import Cover from '../src/components/Cover'
import { shallow, mount } from 'enzyme'

describe('Cover', () => {
  it('should render', () => {
    const wrapper = shallow(<Cover />)
    expect(wrapper).toMatchSnapshot()
  })
})
