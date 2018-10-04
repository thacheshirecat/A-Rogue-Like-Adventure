import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function GameOver(props)
{

  function handleClearingOldGameData()
  {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_CHARACTER',
      character: {}
    };
    dispatch(action);

    const action2 = {
      type: 'CHANGE_EVENT',
      eventId: 'intro'
    };
    dispatch(action2);

    const action3 = {
      type: 'CHANGE_PHASE',
      phase: 'fresh'
    };
    dispatch(action3);

    const action4 = {
      type: 'CHANGE_DIALOGUE',
      dialogue: ''
    };
    dispatch(action4);
  }



  return(
    <div>
      <h3>You lose, good day sir</h3>
      <Link to='/'><button onClick={() => {handleClearingOldGameData();}}>Home</button></Link>
    </div>
  );
}

GameOver.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(GameOver);
