import { swiss } from 'mdx-deck/themes'

export default {
  // extend a default theme
  ...swiss,
  // custom font
  font: 'Roboto, sans-serif',
  // custom colors
  colors: {
    text: 'black',
    background: 'white',
    link: 'blue',
  },
  // syntax highlighting
  // prism: {
  //   style,
  //   languages: {
  //     java,
  //     scala,
  //   },
  // },
}
