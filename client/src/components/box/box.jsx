import React from 'react';
import './box.scss';

class Box extends React.PureComponent {
    render() {
        const {children, className, width, height, onClick} = this.props;
        return <div className={`box ${className} pointer`} style={{width, height}} onClick={onClick}>
            {children}
        </div>;
    }
}

export default Box;