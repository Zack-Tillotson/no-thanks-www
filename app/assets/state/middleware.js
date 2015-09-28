import {Names, Actions} from './actions.js';
import Engine from '../engine';

// XXX Should this middleware add a new action or replace the current action?
export default (store) => (next) => (action) => {

  // Add Player
  if(action.type === Names.ui.changePlayers && action.addOrRemove === 'add') {
    const who = Engine.addPlayer(store.getState());
    action = Actions.engine.changePlayers('add', who); 

  // Remove player
  } else if(action.type === Names.ui.changePlayers && action.addOrRemove === 'remove') {
    const who = Engine.removePlayer(store.getState());
    action = Actions.engine.changePlayers('remove', who);

  // New Game
  } else if(action.type === Names.ui.newGame) {
    const players = Engine.resetPlayers(store.getState().players.list);
    const deck = Engine.getNewDeck();
    const currentPlayer = parseInt(Math.random() * store.getState().players.list.length);
    action = Actions.engine.newGame(players, currentPlayer, deck);

  // Take card
  } else if(action.type === Names.ui.playerDecision && action.decision === 'take') {
    const table = store.getState().table;
    const players = store.getState().players;
    const newCard = Engine.getNewCard(table.deck);
    if(table.deck.currentSize > 0) {
      action = Actions.engine.cardAccepted(players.list[players.currentPlayer], table.deck.topCard, table.pot, newCard);
    }

  // No Thanks!
  } else if(action.type === Names.ui.playerDecision && action.decision === 'noThanks') {
    const players = store.getState().players;
    const player = players.list[players.currentPlayer];
    if(player.money > 0) {
      action = Actions.engine.cardRejected(player);
    }
  }

  return next(action);
}