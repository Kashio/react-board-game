import React from 'react';
import './score.scss';

class Score extends React.PureComponent {
    render() {
        const {index, score} = this.props;
        return <div className="player-score">
                <span className="name">player{index + 1} - </span>
                <span className="score">{score}</span>
            </div>;
    }
}

export default Score;