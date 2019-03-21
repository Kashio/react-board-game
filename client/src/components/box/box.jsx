import React from 'react';
import './box.scss';

class Box extends React.PureComponent {
    render() {
        const {children, className, width, height, row, column, onClick} = this.props;
        return <div className={`box ${className} pointer`} style={{width, height}} onClick={(e) => {
            onClick(row, column, e);
        }}>
            {children}
        </div>;
    }
}

export default Box;