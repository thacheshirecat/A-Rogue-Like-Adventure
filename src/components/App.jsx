import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Main from './Main';
import Tutorial from './Tutorial';
import SelectCharacter from './SelectCharacter';
import GameState from './GameState';
import Error404 from './Error404';

class App extends React.Component
{

  render()
  {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/tutorial' component={Tutorial} />
          <Route path='/newgame' component={SelectCharacter} />
          <Route path='/game' render={()=><GameState eventData={this.props.eventData} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  eventData: PropTypes.object
};

const mapStateToProps = state => {
  return {
    eventData: state.eventData,
    characterData: state.characterData
  };
};

export default withRouter(connect(mapStateToProps)(App));
