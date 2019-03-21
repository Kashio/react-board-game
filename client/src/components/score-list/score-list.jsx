import React from 'react';
import './score-list.scss';

class ScoreList extends React.PureComponent {
    render() {
        const {players, width, height} = this.props;
        return <div className="scores" style={{width, height}}>
            {players.map((player, i) => <div key={i}>
                <span className="player-name">Player{i + 1} - </span>
                <span className="player-score">{player.score}</span>
            </div>)}
        </div>;
    }
}

export default ScoreList;