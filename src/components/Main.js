import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import IntroPres from './presentations/IntroPres';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/presentations/intro" component={IntroPres} />
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  );
}
