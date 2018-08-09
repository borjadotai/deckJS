import React from 'react'
import { SlideTitle } from './'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Columns, Column, Hero, HeroBody } from 'bloomer'

class SuperSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 0
    };
  }

  nextSlide() {
    this.setState({
      location: (this.state.location + 1)
    })
  }

  prevSlide() {
    this.setState({
      location: (this.state.location - 1)
    })
  }

  arrowsMagic() {
    if (this.state.location == 0) {
      return (
        <Columns isCentered>
          <Column className='is-one-fifth'>
          </Column>
          <Column style={{display: 'flex', justifyContent: 'center'}}>
            {this.props.content[0]()}
          </Column>
          <Column style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}} className='is-one-fifth'>
            {
              (this.state.location == (this.props.content.length - 1)) ?
              '' :
              <a onClick={this.nextSlide.bind(this)} id='slide-next' >
                <FontAwesomeIcon
                  className="has-text-light"
                  icon={faChevronRight}
                  size="3x"
                  fixedWidth
                />
              </a>
            }
          </Column>
        </Columns>
      )
    } else {
      return (
        <Columns isCentered>
          <Column style={{display: 'flex', alignItems: 'center'}} className='is-one-fifth'>
            <a onClick={this.prevSlide.bind(this)} id='slide-prev' >
              <FontAwesomeIcon
                className="has-text-light"
                icon={faChevronLeft}
                size="3x"
                fixedWidth
              />
            </a>
          </Column>
          <Column style={{display: 'flex', justifyContent: 'center'}}>
            {this.props.content[this.state.location]()}
          </Column>
          <Column style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}} className='is-one-fifth'>
            {
              (this.state.location == (this.props.content.length - 1)) ?
              '' :
              <a onClick={this.nextSlide.bind(this)} id='slide-next' >
                <FontAwesomeIcon
                  className="has-text-light"
                  icon={faChevronRight}
                  size="3x"
                  fixedWidth
                />
              </a>
            }
          </Column>
        </Columns>
      )
    }
  }

  render() {
    return (
      <Hero isFullHeight isColor={this.props.color} key={this.props.key}>
        <HeroBody style={{ display: 'flex', flexDirection: 'column' }}>
          <SlideTitle title={this.props.title} subtitle={this.props.subtitle} />
          <Container hasTextAlign="centered">
            {this.arrowsMagic()}
          </Container>
        </HeroBody>
      </Hero>
    )
  }

}

export default SuperSlide
