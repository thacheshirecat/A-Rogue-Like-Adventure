import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function CharacterConfirmation(props)
{
  let deselectedCharacter = {};

  function handleDeselectingCharacter(deselectedCharacter)
  {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_CHARACTER',
      character: deselectedCharacter
    };
    dispatch(action);
  }

  return(
    <div className='card'>
      <style jsx>{`
          h4, h3 {
            text-align: center;
          }
          .button1 {
            width: 50px;
            margin: auto;
            float: left;
          }
          .button2 {
            width: 50px;
            margin: auto;
            float: right;
          }
          .card {
            width: 250px;
            margin: auto;
          }
      `}</style>
      <h3>You Have Selected: {props.selectedCharacter.name}</h3>
      <h4>Are You Sure?</h4>
      <div>
        <Link to='/game'><button className='button1'>Yes</button></Link><button className='button2' onClick={() => {handleDeselectingCharacter(deselectedCharacter);}}>No</button>
      </div>
    </div>
  );
}

CharacterConfirmation.propTypes = {
  selectedCharacter: PropTypes.object
};

export default connect()(CharacterConfirmation);
