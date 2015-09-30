import React from 'react';
import Radium from 'radium';
import CardStack from './CardStack';
import PlayerControls from './PlayerControls';

export default Radium(React.createClass({
  getCardStack(values) {
    return <CardStack values={values} stackSize={values.length} showBottomCardValues={true} />
  },
  render() {
    return (
      <div style={[styles.container, {backgroundColor: this.props.color}]}>
        <span style={styles.name}>
          {this.props.playerType === 'ai' && (
            "Computer "
          )}
          {this.props.name}
        </span>
        {(this.props.state === 'ongoing' || this.props.state === 'gameover') && (
          <span style={styles.money}>${this.props.money}</span>
        )}
        {(this.props.state === 'ongoing' || this.props.state === 'gameover') && (
          <span style={styles.cardPoints}>{this.props.cardPoints} Points</span>
        )}
        {(this.props.state === 'ongoing' || this.props.state === 'gameover') && this.props.stacks.length > 0 && (
          <div style={styles.cards}>
            {this.props.stacks.map((stack) => {
              return this.getCardStack(stack);
            })}
          </div>
        )}
        {this.props.state === 'gameover' && (
          <span style={styles.total}>
            Final Score: {this.props.netPoints}
          </span>
        )}
        {(this.props.state === 'pregame' || this.props.state === 'ongoing') && (
          <PlayerControls player={this.props} />
        )}
      </div>
    )
  }
}));

const styles = {
  container: {
    borderTop: 'solid 2px black',
    clear: 'both',
    padding: '5px',
  },
  whoTurn: {
    float: 'left',
    width: '15px'
  },
  name: {
    display: 'inline-block',
    width: '33%'
  },
  money: {
    display: 'inline-block',
    width: '33%',
    textAlign: 'right'
  },
  cards: {
    display: 'block',
    margin: "10px",
    padding: '10px',
    background: 'rgba(255,255,255,.5)',
    boxShadow: '0 0 5px 5px rgba(255,255,255,.3)'
  },
  total: {
    display: 'block',
    clear: 'both',
    textAlign: 'left',
    marginTop: '15px'
  },
  cardPoints: {
    display: 'inline-block',
    width: '33%',
    textAlign: 'right'
  }

}