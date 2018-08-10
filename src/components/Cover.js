import React from 'react'
import { Header } from '../components'
import logo from '../assets/logo.png'
import { Container, Hero, HeroHeader, HeroBody, Title, Button } from 'bloomer'

const Cover = () => (
  <Hero isFullHeight isColor="primary">
    <HeroHeader>
      <Header />
    </HeroHeader>

    <HeroBody>
      <Container hasTextAlign="centered">
        <img src={logo} className='logo' />
        <Title className="is-size-2 is-size-4-mobile has-text-weight-light">
          Create your best presentation, as a static webapp with DeckJS.
        </Title>
        <div className="npm is-hidden-mobile">
          <code>
            <span className="is-unselectable">$ </span>
            <span>git clone git@github.com:borjadotai/DeckJS.git</span>
          </code>
        </div>
        <Button isColor='white' isSize="medium" isOutlined style={{margin: '2rem 0 0 0'}}>Get Started</Button>
        <div className="isCentered is-hidden-mobile">
          <iframe src="https://ghbtns.com/github-btn.html?user=borjadotai&repo=deckjs&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
        </div>
      </Container>
    </HeroBody>
  </Hero>
)

export default Cover

