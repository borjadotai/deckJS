import { Slide1, Slide2, Slide2M, Slide3 } from './content'

const Store = [
  {
    super: 0,
    title: 'Test',
    subtitle: 'I am a dummy slide, I have no purpuse',
    color: 'dark',
    content: Slide1,
  },
  {
    super: 1,
    title: 'Another One',
    subtitle: 'Seriously though, zero purpose for me right now',
    color: 'success',
    content: [Slide2, Slide2M],
  },
  {
    super: 0,
    title: 'Please Do Something!',
    subtitle: 'I would very much like to be doing something you know?',
    color: 'warning',
    content: Slide3,
  }
]

export default Store
