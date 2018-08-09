import { What, What2, What3, What4, What5, What6, What7, What8, What9, Why, Why2, Why3, Power, Power2, Power3, Power4, Social } from './content'

const Store = [
  {
    super: 1,
    title: 'WHAT 🤯',
    subtitle: 'The introduction of the deck to web concept',
    color: 'danger',
    content: [What, What2, What3, What4, What5, What6, What7, What8, What9],
  },
  {
    super: 1,
    title: 'WHY?',
    subtitle: 'When would I want a web to be similar to a slide deck?',
    color: 'warning',
    content: [Why, Why2, Why3],
  },
  {
    super: 1,
    title: 'Superpowers 🔮',
    subtitle: 'What about all the cool stuff though? What can I do with it?',
    color: 'success',
    content: [Power, Power2, Power3, Power4],
  },
  {
    super: 0,
    title: 'Social stuff 📱',
    subtitle: `Have you used DeckJS and wanna showcase what you've done?`,
    color: 'dark',
    content: Social,
  }
]

export default Store
