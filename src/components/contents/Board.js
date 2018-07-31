import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Board extends Component {

    componentWillMount() {
        console.log('Board ',this.props)
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps: ", nextProps);
    }

    render() {
        return (
            <div>
                Board Title
                <br/>
                Board Content

                <ul>
                    <li><Link to='/forum/1'>prev</Link></li>
                    <li><Link to='/forum/3'>next</Link></li>
                </ul>
            </div>
        );
    }
}

export default Board;