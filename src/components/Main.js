import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import DNJAPP from './DNJAPP';
import Minema from './Minema';
import Horizontaltextscroll from './Horizontaltextscroll';
import nuDynamics from './nuDynamics';
import IntroPres from './presentations/IntroPres';
import AnimationInUx from './presentations/AnimationInUx';
import PresentationList from './PresentationList';
import ScrollMagicGsap from './ScrollMagicGsap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function Main() {
  return (
    <main>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition timeout={500} classNames="fade" key={location.key}>
              <Switch location={location}>
                <Route exact path="/minema" component={Minema} />
                <Route exact path="/dnj" component={DNJAPP} />
                <Route
                  exact
                  path="/horizontaltextscroll"
                  component={Horizontaltextscroll}
                />
                <Route
                  exact
                  path="/presentations"
                  component={PresentationList}
                />
                <Route
                  exact
                  path="/presentations/intro"
                  component={IntroPres}
                />
                <Route
                  exact
                  path="/done/scrollMagicGsap"
                  component={ScrollMagicGsap}
                />
                <Route exact path="/nuDynamics" component={nuDynamics} />
                <Route
                  exact
                  path="/presentations/AnimationInUx"
                  component={AnimationInUx}
                />
                <Route exact path="/" component={Home} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </main>
  );
}
