import React, { Component } from 'react';
import Counter from './Counter';

class CounterApp extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 10 };
    }

    render() {
        return (
            <div>
                <div><Counter count = { this.state.count }/></div>
            </div>
        );
    }
}

export default CounterApp;
