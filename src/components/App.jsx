import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main';
import SelectCharacter from './SelectCharacter';

function App()
{
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/newgame' component={SelectCharacter} />
      </Switch>
    </div>
  );
}

export default App;
