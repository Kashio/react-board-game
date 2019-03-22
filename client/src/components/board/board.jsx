import React, {useCallback} from 'react';
import './board.scss';
import Box from '@/box/box';
import classNames from 'classnames';

const Board = ({board, width, height, boxTemplate, onBoxClick}) => {
    return <div className="board" style={{width, height}}>
        {board.map((row, i) => <div key={i} className="row" style={{height: height / board.length}}>
                {row.map((column, j) => {
                    const boxClass = classNames({
                        top: i !== 0,
                        right: j !== row.length - 1,
                        bottom: i !== board.length - 1,
                        left: j !== 0
                    });
                    const memoizedBoxClickCallback = useCallback(
                        (e) => {
                            onBoxClick(i, j);
                        },
                        [i, j],
                    );
                    return <Box key={i + j} className={boxClass} width={width / row.length} height={height / board.length} row={i} column={j} onClick={memoizedBoxClickCallback}>
                        {boxTemplate(i, j)}
                    </Box>;
                })}
            </div>
        )}
    </div>;
};

export default Board;