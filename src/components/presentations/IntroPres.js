import React, { Component } from 'react';
import { Deck, Heading, List, ListItem, Notes, Slide, Text } from 'spectacle';

import AnimationLottie from './AnimationLottie';
import BackHomeButton from './BackHomeButton';
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
export default class IntroPres extends Component {
  render() {
    return (
      <div>
        <BackHomeButton />
        <Deck
          transition={['fade', 'slide']}
          transitionDuration={500}
          theme={theme}
        >
          <Slide transition={['fade']} bgColor="secondary">
            <AnimationLottie data={require('./data.json')} />
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
            <Notes>into - Css andimation - Then greensock - who I am</Notes>
          </Slide>
          <Slide transition={['fade']} bgColor="secondary">
            <Heading caps>Why Use Web Animation</Heading>
            <List>
              <ListItem>
                <Heading size={5} textColor="primary" textFont="primary">
                  It's seen as your store front - Showcase you product/service
                </Heading>
              </ListItem>

              <ListItem>
                <Heading size={5} textColor="primary" textFont="primary">
                  Show User flow - UX
                </Heading>
              </ListItem>
            </List>
          </Slide>
          <Slide transition={['fade']} bgColor="tertiary">
            <Heading size={3} textColor="primary">
              🚀
            </Heading>
            <Heading size={6} textColor="primary" fit caps>
              Good Examples
              <Notes>
                Facebook APP,Uber Easts ,Tinder(Swipe Right) ,Apple
                (https://www.apple.com/iphone-xr/), Apple Wrong Login
              </Notes>
            </Heading>
          </Slide>
          <Slide transition={['fade']} bgColor="quaternary">
            <Heading size={3} textColor="primary">
              💩
            </Heading>
            <Heading size={6} textColor="primary" fit caps>
              Bad Examples
            </Heading>
            <Notes>https://blinkee.com/ , mto,http://art.yale.edu/</Notes>
          </Slide>
          <Slide transition={['fade']} bgColor="tertiary">
            <Heading size={3} textColor="primary">
              🔑
            </Heading>
            <Heading textColor="primary" caps>
              Some Concepts to Keep in Mind
            </Heading>
            <List>
              <Heading size={5} textColor="primary" textFont="primary">
                Keep It Fast
              </Heading>
              <Heading size={5} textColor="primary" textFont="primary">
                Keep It Interesting
              </Heading>
              <Heading size={5} textColor="primary" textFont="primary">
                Keep It Relevant
                <Notes>Hello</Notes>
              </Heading>
            </List>
          </Slide>
          <Slide transition={['fade']} bgColor="secondary">
            <Heading caps>What We'll Cover</Heading>
            <List>
              <Heading size={5} textColor="primary" textFont="primary">
                Animation for UX
              </Heading>
              <Heading size={5} textColor="primary" textFont="primary">
                Basic CSS Animation
              </Heading>
              <Heading size={5} textColor="primary" textFont="primary">
                GSAP Animation Library
              </Heading>
            </List>
          </Slide>
          <Slide transition={['fade']} bgColor="secondary">
            <Heading size={3} textColor="primary">
              📖
            </Heading>
            <Heading caps>Resources</Heading>

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
              <Text size={2} caps textColor="tertiary" textFont="secondary">
                <a
                  style={{ color: '#fff' }}
                  target="_blank"
                  href="https://daneden.github.io/animate.css/"
                >
                  Animate.css
                </a>
              </Text>
              <Text size={2} caps textColor="tertiary" textFont="secondary">
                <a
                  style={{ color: '#fff' }}
                  target="_blank"
                  href="https://animejs.com/"
                >
                  animeJs
                </a>
              </Text>
              <Text size={2} caps textColor="tertiary" textFont="secondary">
                <a
                  style={{ color: '#fff' }}
                  target="_blank"
                  href="https://threejs.org/"
                >
                  threeJs
                </a>
              </Text>
            </ListItem>
          </Slide>
        </Deck>
      </div>
    );
  }
}
