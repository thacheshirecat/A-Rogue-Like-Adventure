import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main';
import Tutorial from './Tutorial';
import SelectCharacter from './SelectCharacter';
import GameState from './GameState';


function App()
{
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/tutorial' component={Tutorial} />
        <Route path='/newgame' component={SelectCharacter} />
        <Route path='/game' component={GameState} />
      </Switch>
    </div>
  );
}

export default App;
