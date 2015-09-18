const addPlayer = 'Add Player';
const addPlayerAction = () => {
  return {type: addPlayer};
}

const Dispatcher = (dispatch) => { 
  return {
    addPlayer: () => dispatch(addPlayerAction())
  };
}

const Names = {addPlayer};

export default {Dispatcher, Names};