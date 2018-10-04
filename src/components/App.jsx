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
          <Route
            path='/newgame' render={()=><SelectCharacter
              eventData={this.props.eventData}
              characterData={this.props.characterData}
              selectedCharacter={this.props.selectedCharacter}
              currentEvent={this.props.currentEvent}
              gamePhase={this.props.gamePhase}
              currentDialogue={this.props.currentDialogue}/>} />
          <Route
            path='/game'
            render={()=><GameState
              eventData={this.props.eventData}
              selectedCharacter={this.props.selectedCharacter}
              currentEvent={this.props.currentEvent}
              gamePhase={this.props.gamePhase}
              currentDialogue={this.props.currentDialogue} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  eventData: PropTypes.object,
  characterData: PropTypes.object,
  selectedCharacter: PropTypes.object,
  currentEvent: PropTypes.string,
  gamePhase: PropTypes.string,
  currentDialogue: PropTypes.object
};

const mapStateToProps = state => {
  return {
    eventData: state.eventData,
    characterData: state.characterData,
    selectedCharacter: state.selectedCharacter,
    currentEvent: state.currentEvent,
    gamePhase: state.gamePhase,
    currentDialogue: state.currentDialogue
  };
};

export default withRouter(connect(mapStateToProps)(App));
