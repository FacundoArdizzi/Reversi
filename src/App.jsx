import React from 'react';
import { Route } from 'react-router-dom';
import Game from './views/Game';
import Start from './views/Start';

const App = () => (
  <div>
    <Route path="/" component={Start} exact />
    <Route path="/reversi" component={Game} />
  </div>
);

export default App;
