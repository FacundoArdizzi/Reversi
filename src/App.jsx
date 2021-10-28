import React from 'react';
import { Route } from 'react-router-dom';
import Game from './components/Game';
import Start from './components/Start';

const App = () => (
  <div>
    <Route path="/" component={Start} exact />
    <Route path="/reversi" component={Game} />
  </div>
);

export default App;
