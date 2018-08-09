import React from 'react'
import SocialLinks from '../Social'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Columns, Title } from 'bloomer'

const Social = () => (
  <div>
    <Title className="has-text-weight-light is-size-4 is-size-6-mobile">Make sure to tweet with </Title>
    <span className="tag is-light has-text-weight-light is-size-4 is-size-6-mobile">#madewithDeckJS</span>
    <Title style={{margin: '1rem 0 0 0'}} className="has-text-weight-light is-size-4 is-size-6-mobile">and we'll give it some love ❤️</Title>
    <Columns isCentered isMultiline style={{margin: '2rem 0 0 0'}}>
      {SocialLinks.map(c => {
        return (
          <a
            href={c.href}
            target="_blank"
            key={c.id}
            className="column is-one-third social-links"
          >
            <Box style={{ padding: '3rem', backgroundColor: c.color }}>
              <FontAwesomeIcon
                className="has-text-light"
                icon={c.classFontAwesome}
                size="3x"
                fixedWidth
              />
              <p className="subtitle" style={{ margin: '2rem 0 0' }}>
                <small>{c.id}</small>
              </p>
            </Box>
          </a>
        )
      })}
    </Columns>
    <Title style={{margin: '1rem 0 0 0'}} className="has-text-weight-light is-size-4 is-size-6-mobile">We'll also create a portfolio section soon. Tweet if you wanna be there!</Title>
  </div>
)

export default Social
