import {Names, Actions} from '../actions.js';
import Engine from '../../engine';

function delayedDispatch(dispatch, action) {
  setTimeout(() => dispatch(action), 1);
}

export default (store) => (next) => (action) => {

  const state = store.getState();

  // Add Player
  if(action.type === Names.ui.changePlayers && action.addOrRemove === 'add') {
    const who = Engine.addPlayer(state, action.playerType);
    delayedDispatch(store.dispatch, Actions.engine.changePlayers('add', who));

  // Remove player
  } else if(action.type === Names.ui.changePlayers && action.addOrRemove === 'remove') {
    const whom = Engine.removePlayer(state, action.who);
    delayedDispatch(store.dispatch, Actions.engine.changePlayers('remove', whom));

  // New Game
  } else if(action.type === Names.ui.newGame) {
    const players = Engine.resetPlayers(state.players.list);
    const deck = Engine.getNewDeck();
    const currentPlayer = parseInt(Math.random() * state.players.list.length);
    delayedDispatch(store.dispatch, Actions.engine.newGame(players, currentPlayer, deck));

  // Reset Game (Go back to setup screen)
  } else if(action.type === Names.ui.resetGame) {
    delayedDispatch(store.dispatch, Actions.engine.resetGame());

  // Take card
  } else if(action.type === Names.ui.playerDecision && action.decision === 'take') {
    const table = state.table;
    const players = state.players;
    const newCard = Engine.getNewCard(table.deck);
    if(table.deck.currentSize > 0) {
      delayedDispatch(store.dispatch, Actions.engine.cardAccepted(players.list[players.currentPlayer], table.deck.topCard, table.pot, newCard));
    }

  // No Thanks!
  } else if(action.type === Names.ui.playerDecision && action.decision === 'noThanks') {
    const players = state.players;
    const player = players.list[players.currentPlayer];
    if(player.money > 0) {
      delayedDispatch(store.dispatch, Actions.engine.cardRejected(player));
    }

  // Time for an AI action
  } else if(action.type === Names.ai.requestAction && state.game.state === 'ongoing') {
    const players = state.players;
    const player = players.list[players.currentPlayer];
    if(player.playerType === 'ai') {
      delayedDispatch(store.dispatch, Actions.ai.requestDecision());
    }
  }

  return next(action);
}