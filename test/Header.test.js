import React from 'react'
import Header from '../src/components/Header'
import { shallow, mount } from 'enzyme'

describe('Header', () => {
  it('should render', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})