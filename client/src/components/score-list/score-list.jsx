import React from 'react';
import './score-list.scss';
import Score from '@/score/score';

class ScoreList extends React.PureComponent {
    render() {
        const {players, width, height} = this.props;
        return <div className="scores" style={{width, height}}>
            {players.map((player, i) => <Score key={i} index={i} score={player.score}/>)}
        </div>;
    }
}

export default ScoreList;