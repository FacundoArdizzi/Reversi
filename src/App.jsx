import React from 'react';
import { Route } from 'react-router-dom';
import Game from './views/game/Game';
import Start from './views/start/Start';
import End from './views/end/End';

const App = () => (
  <div>
    <Route path="/" component={Start} exact />
    <Route path="/reversi" component={Game} />
    <Route path="/end" component={End} />
  </div>
);

export default App;
