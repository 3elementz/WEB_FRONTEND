import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThumbBoard extends Component {

    componentWillMount() {
        console.log('ThumbBoard ',this.props)
    }

    render() {
        return (
            <ul>
                <li><Link to={`${this.props.match.url}/1`}>ThumbBoard #1</Link></li>
                <li><Link to={`${this.props.match.url}/2`}>ThumbBoard #2</Link></li>
                <li><Link to={`${this.props.match.url}/3`}>ThumbBoard #3</Link></li>
                <li><Link to={`${this.props.match.url}/4`}>ThumbBoard #4</Link></li>
            </ul>
        );
    }
}

export default ThumbBoard;