import React from 'react';
import './app.scss';
import TicTacToe from '@/tic-tac-toe/tic-tac-toe';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="app">
                <main>
                    <TicTacToe/>
                </main>
            </div>
        );
    }
}

export default App;