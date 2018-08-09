import React from 'react'
import { Header } from '../components'
import logo from '../assets/logo.png'
import { Container, Hero, HeroHeader, HeroBody, Title } from 'bloomer'

const textStore = {
  main: {
    middle: {__html: `Thanks for having installed DeckJS. Welcome to a new way of making webs.`},
    small: {__html: `Please give a star and upvote or like on whatever platform you found us! 🙏❤️`}
  },
  text: [
      'Imagine creating a static webapp on JS.',
      'Imagine your best slide deck',
      `Why can't they be one?`
  ],
  frames: [
    <iframe src="https://ghbtns.com/github-btn.html?user=borjadotai&repo=deckjs&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>,
    <iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=fork&size=large" frameborder="0" scrolling="0" width="158px" height="30px"></iframe>
  ]
}

const Cover = () => (
  <Hero isFullHeight isColor="primary">
    <HeroHeader>
      <Header />
    </HeroHeader>

    <HeroBody>
      <Container hasTextAlign="centered">
        <img src={logo} style={{ height: '12rem', margin: '0 0 2rem 0' }} />
        <Title className="is-size-2 is-size-4-mobile has-text-weight-light">
          Create your best <span className="has-text-weight-normal">presentation</span>, as a <span className="has-text-weight-normal">static webapp</span> with <span className="has-text-weight-normal">DeckJS</span>.
        </Title>
        <Title className="is-size-3 is-size-5-mobile has-text-weight-light" dangerouslySetInnerHTML={textStore.main.middle} />
        <Title className="is-size-4 is-size-6-mobile has-text-weight-light" dangerouslySetInnerHTML={textStore.main.small} />
        <div className="isCentered">
          {textStore.frames.map(frame => {
            return frame
          })}
        </div>
      </Container>
    </HeroBody>
  </Hero>
)

export default Cover
