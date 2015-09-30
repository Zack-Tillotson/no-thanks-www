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
      <div style={[styles.container]}>
        {this.props.state === 'ongoing' && (
          <div style={styles.whoTurn}>
            {this.props.isCurrentPlayer && (
              ">"
            )}
          </div>
        )}
        <span style={styles.name}>{this.props.name}</span>
        {(this.props.state === 'ongoing' || this.props.state === 'gameover') && (
          <span style={styles.money}>${this.props.money}</span>
        )}
        {(this.props.state === 'ongoing' || this.props.state === 'gameover') && (
          <span style={styles.cardPoints}>{this.props.cardPoints} Points</span>
        )}
        {(this.props.state === 'ongoing' || this.props.state === 'gameover') && (
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
    clear: 'both'
  },
  whoTurn: {
    float: 'left',
    height: '75px',
    width: '15px'
  },
  name: {
    display: 'inline-block',
    width: '150px'
  },
  money: {
    display: 'inline-block'
  },
  cards: {
    display: 'block',
    marginTop: '10px'
  },
  total: {
    display: 'block',
    clear: 'both',
    textAlign: 'left',
    marginTop: '15px',
    marginBottom: '10px'
  },
  cardPoints: {
    marginLeft: '10px'
  }

}