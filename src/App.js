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
import AnimationLottie from './AnimationLottie';
import createTheme from 'spectacle/lib/themes/default';
const theme = createTheme(
  {
    primary: 'white',
    secondary: '#000000',
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
        <Slide transition={['slide']} bgColor="secondary">
          {/* <AnimationLottie /> */}
          <Heading
            size={1}
            fit
            caps
            lineHeight={1}
            textColor="primary"
            textFont="primary"
          >
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
                  It's seen as your store front - Impress people with something
                  unique to your product
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
          <Heading size={3} textColor="primary">
            🚀
          </Heading>
          <Heading size={6} textColor="primary" fit caps>
            Good Examples
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="quaternary">
          <Heading size={3} textColor="primary">
            💩
          </Heading>
          <Heading size={6} textColor="primary" fit caps>
            Bad Examples
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            🔑
          </Heading>
          <Heading textColor="primary" caps>
            Key Concepts
          </Heading>
          <List>
            <Appear>
              <Heading size={5} textColor="primary" textFont="primary">
                Keep It Fast
              </Heading>
            </Appear>
            <Appear>
              <Heading size={5} textColor="primary" textFont="primary">
                Keep It Interesting
              </Heading>
            </Appear>
            <Appear>
              <Heading size={5} textColor="primary" textFont="primary">
                Keep It Relevant
                <Notes>Hello</Notes>
              </Heading>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Heading caps>What We'll Cover</Heading>
          <List>
            <Appear>
              <Heading size={5} textColor="primary" textFont="primary">
                Basic CSS Animation
              </Heading>
            </Appear>
            <Appear>
              <Heading size={5} textColor="primary" textFont="primary">
                Animation In UX
              </Heading>
            </Appear>
            <Appear>
              <Heading size={5} textColor="primary" textFont="primary">
                GSAP Animaton Libary
                <Notes>Hello</Notes>
              </Heading>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={3} textColor="primary">
            📖
          </Heading>
          <Heading caps>Resources</Heading>
          <Appear>
            <ListItem>
              <Text size={2} caps textColor="tertiary" textFont="secondary">
                <a
                  style={{ color: '#fff' }}
                  target="_blank"
                  href="https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9"
                >
                  animation in UX
                </a>
              </Text>
              <Text size={2} caps textColor="tertiary" textFont="secondary">
                <a
                  style={{ color: '#fff' }}
                  target="_blank"
                  href="https://www.elegantthemes.com/blog/tips-tricks/when-it-makes-sense-to-use-animations-in-web-design"
                >
                  When To Use Animation
                </a>
              </Text>
              <Text size={2} caps textColor="tertiary" textFont="secondary">
                <a
                  style={{ color: '#fff' }}
                  target="_blank"
                  href="https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript"
                >
                  CSS VS JS
                </a>
              </Text>
              <Text size={2} caps textColor="tertiary" textFont="secondary">
                <a
                  style={{ color: '#fff' }}
                  target="_blank"
                  href="https://greensock.com/docs"
                >
                  GSAP Docs
                </a>
              </Text>
            </ListItem>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
