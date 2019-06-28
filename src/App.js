import React, { Component } from 'react';
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  CodePane,
  Slide,
  Text,
  Appear
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
const theme = createTheme(
  {
    primary: 'white',
    secondary: '#121212',
    tertiary: '#03DAC6',
    quaternary: '#cf6679'
  },
  {
    primary: 'TechnaSans-Regular',
    secondary: 'EnvyCodeR'
  }
);
export default class App extends Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            WEB Animation
          </Heading>
          <Text
            size={2}
            caps
            margin="10px 0 0"
            textColor="tertiary"
            textFont="secondary"
          >
            CSS | JAVASCRIPT | GSAP
          </Text>
          <Text
            size={5}
            caps
            margin="10px 0 0"
            textColor="quaternary"
            textFont="secondary"
          >
            A.H.Welgemoed
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading caps>Why Use Web Animation</Heading>
          <List>
            <Appear>
              <ListItem>
                <Heading size={5} textColor="primary" textFont="primary">
                  It's seen as your store from/ sore window - Impress people
                  with something unique to your product
                </Heading>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Heading size={5} textColor="primary" textFont="primary">
                  "Force" User flow - UX
                </Heading>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Heading size={5} textColor="primary" textFont="primary">
                  It's Fun
                </Heading>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            🚀
          </Heading>
          <Heading size={6} textColor="primary" fit caps>
            Good Examples
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="quaternary">
          <Heading size={1} textColor="primary">
            💩
          </Heading>
          <Heading size={6} textColor="primary" fit caps>
            Bad Examples
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
