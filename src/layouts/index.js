import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../assets/favicon.png';
import 'font-awesome/css/font-awesome.css'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="DeckJS | Turn beautiful slide decks into gorgeous webapps"
      meta={[
          { name: 'description', content: 'DeckJS | Turn beautiful slide decks into gorgeous webapps' },
          { name: 'keywords', content: 'slides, deck, deckJS, gatsby, bulma' },
      ]}
      link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
