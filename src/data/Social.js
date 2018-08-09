import {
  faFacebookF,
  faGithub,
  faGitlab,
  faInstagram,
  faMediumM,
  faProductHunt,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const SocialLinks = [
  {
    id: 'GitHub',
    href: 'https://github.com/borjadotai',
    classFontAwesome: faGithub,
    color: '#25292e',
    isPrimary: true,
  },
  {
    id: 'GitLab',
    href: 'https://gitlab.com/borjadotai',
    classFontAwesome: faGitlab,
    color: '#fa6d34',
    isPrimary: false,
  },
  {
    id: 'Instagram',
    href: 'https://instagram.com/borjadotai',
    classFontAwesome: faInstagram,
    color: '#e1306c',
    isPrimary: false,
  },
  {
    id: 'Medium',
    href: 'https://medium.com/@borjadotai',
    classFontAwesome: faMediumM,
    color: '#00ab6c',
    isPrimary: true,
  },
  {
    id: 'Product Hunt',
    href: 'https://www.producthunt.com/@borjadotai',
    classFontAwesome: faProductHunt,
    color: '#da552f',
    isPrimary: true,
  },
  {
    id: 'Twitter',
    href: 'https://twitter.com/borjadotai',
    classFontAwesome: faTwitter,
    color: '#1da1f2',
    isPrimary: true,
  },
]

export default SocialLinks
