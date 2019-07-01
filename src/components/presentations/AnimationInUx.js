import React, { Component } from 'react';
import {
  Deck,
  Heading,
  List,
  ListItem,
  Notes,
  Slide,
  Text,
  Appear
} from 'spectacle';

import AnimationLottie from './AnimationLottie';
import BackHomeButton from './BackHomeButton';
import createTheme from 'spectacle/lib/themes/default';
const theme = createTheme(
  {
    primary: 'white',
    secondary: '#274972',
    tertiary: '#03DAC6',
    quaternary: '#E4EEFA'
  },
  {
    primary: 'TechnaSans-Regular',
    secondary: 'EnvyCodeR'
  }
);
export default class AnimationInUx extends Component {
  render() {
    return (
      <div>
        <BackHomeButton />
        <Deck
          transition={['zoom', 'slide']}
          transitionDuration={500}
          theme={theme}
        >
          <Slide transition={['fade']} bgColor="secondary">
            <AnimationLottie data={require('./ux.json')} />
            <Heading
              size={1}
              fit
              caps
              lineHeight={1}
              textColor="primary"
              textFont="primary"
            >
              Animation in Ux
            </Heading>
          </Slide>
          <Slide transition={['fade']} bgColor="secondary">
            <Heading
              size={1}
              fit
              caps
              lineHeight={1}
              textColor="primary"
              textFont="primary"
            >
              What Do You Idealy want to convey?
            </Heading>
            <Text
              size={4}
              caps
              margin="50px 10px 10px 10px"
              textColor="quaternary"
              textFont="secondary"
            >
              Speed and Relavency
            </Text>
            <Text
              size={4}
              caps
              margin="50px 10px 10px 10px"
              textColor="quaternary"
              textFont="secondary"
            >
              Workig with the constraints of Tech
            </Text>
            <Text
              size={6}
              caps
              margin="20px 10px 10px 10px"
              textColor="quaternary"
              textFont="secondary"
            >
              i.e. Images will almost always be deliverd with greater delay
              (Push for SVG's above Img's) Show what you have and bring in what
              is outstanding intresting
            </Text>
          </Slide>
          <Slide transition={['fade']} bgColor="secondary">
            <Heading
              size={1}
              caps
              lineHeight={1}
              textColor="primary"
              textFont="primary"
            >
              Speed
            </Heading>
            <Text
              size={4}
              caps
              margin="50px 10px 10px 10px"
              textColor="quaternary"
              textFont="secondary"
            >
              200ms - 500ms
            </Text>
            <Text
              size={4}
              caps
              margin="50px 10px 10px 10px"
              textColor="quaternary"
              textFont="secondary"
            >
              Bigger the screen - Slower the Speed
            </Text>
            <Text
              size={5}
              caps
              margin="50px 10px 10px 10px"
              textColor="quaternary"
              textFont="secondary"
            >
              Small Element - Fast
            </Text>
            <Text
              size={5}
              caps
              margin="50px 10px 10px 10px"
              textColor="quaternary"
              textFont="secondary"
            >
              Large Element - Slower
            </Text>
            <Notes>
              S=D/T Distance is Higher Time Same Speed will Increase distance is
              directly proportional to speed
            </Notes>
          </Slide>
          <Slide transition={['fade']} bgColor="secondary">
            <Heading
              size={1}
              caps
              lineHeight={1}
              textColor="primary"
              textFont="primary"
            >
              Easing
            </Heading>
            <Text
              size={4}
              caps
              margin="50px 10px 10px 10px"
              textColor="quaternary"
              textFont="secondary"
            >
              Position Over Time
            </Text>
            <Text
              size={4}
              caps
              margin="50px 10px 10px 10px"
              textColor="quaternary"
              textFont="secondary"
            >
              Linear | Ease-in | Ease-out | Ease-in-out | Cubic-Bezier
            </Text>
            <Notes>Ease Out - Start Quick ends Slow</Notes>
            <Notes>Ease In - Start Slow ends Quick (Car Acceleration)</Notes>
          </Slide>
          <Slide transition={['fade']} bgColor="secondary">
            <Heading
              size={1}
              caps
              lineHeight={1}
              textColor="primary"
              textFont="primary"
            >
              Set Rules
            </Heading>
            <Notes>If List Obeys a Rule do It every where</Notes>
          </Slide>
        </Deck>
      </div>
    );
  }
}
