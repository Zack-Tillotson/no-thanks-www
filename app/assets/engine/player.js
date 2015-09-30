import uuid from 'uuid';

const NAMES = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Fred', 'Gabrielle', 'Harry', 'Igor', 'Jack', 'Kelly', 'Laura', 'Mark', 'Nancy', 'Oscar'].sort((a,b)=>Math.random()-.5);
const COLORS = ['#8ED8FF', '#FF6363', '#FFF663', '#63FF64', '#FFAFFE', '#FFC463', 'rgba(179, 46, 255, 0.47)', '#3FDACF', '#64A702', '#F9CD18', '#E6E6E6', '#ccc', 'rgba(62, 191, 255, 0.55)'].sort((a,b)=>Math.random()-.5);
let playerIndex = 0;

const STARTING_PLAYER_MONEY = 11;

function getPlayer(state, who) {
  const list = state.players.list;
  if(list.length)
    return list.find((person) => who.__id__ === person.__id__);
  else 
    return null;
}

function getLastPlayer(state) {
  const list = state.players.list;
  if(list.length)
    return list[list.length - 1]
  else
    return null;
}

export default {
  addPlayer(state) {
    return {
      __id__: uuid.v4(),
      name: NAMES[playerIndex % NAMES.length],
      color: COLORS[playerIndex++ % COLORS.length],
      money: STARTING_PLAYER_MONEY,
      cards: []
    }
  },
  removePlayer(state, who) {
    return who ? getPlayer(state, who) : getLastPlayer(state);
  },
  resetPlayers(players) {
    return players
      .sort((a,b) => Math.random() > .5)
      .map((player) => {
      return {...player, money: STARTING_PLAYER_MONEY, cards: []}
    });
  }
}