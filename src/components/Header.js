import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Navbar,
  NavbarBrand,
  NavbarStart,
  NavbarEnd,
  NavbarItem,
  Container,
} from 'bloomer'
import SocialLinks from '../data/Social'

const LinkList = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/code',
    title: 'GitHub',
  },
]

const NavbarRoute = props => (
  <NavbarItem href={props.href}>
    {props.content}
  </NavbarItem>
)

const SocialMediaLinks = () => (
  <div style={{ display: 'flex' }}>
    {SocialLinks.filter(link => link.isPrimary).map(c => {
      return (
        <NavbarItem href={c.href} target="_blank" key={c.id}>
          <FontAwesomeIcon icon={c.classFontAwesome} fixedWidth />
        </NavbarItem>
      )
    })}
  </div>
)

const Header = () => (
  <Container>
    <Navbar>
      <NavbarBrand style={{ width: '100%' }} isDisplay="flex">
        <NavbarStart style={{ display: 'flex' }}>
          <SocialMediaLinks />
        </NavbarStart>
        <NavbarEnd style={{ display: 'flex', marginLeft: 'auto' }}>
          <NavbarRoute href="/" content="Home" />
          <NavbarRoute href="https://github.com/borjadotai/DeckJS" content="GitHub" />
        </NavbarEnd>
      </NavbarBrand>
    </Navbar>
  </Container>
)

export default Header
