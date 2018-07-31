import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ThumbArticle extends Component {

    componentWillMount() {
        console.log('ThumbArticle ',this.props)
    }

    render() {
        return (
            <ul>
                <li><Link to={`${this.props.match.url}/1`}>ThumbArticle #1</Link></li>
                <li><Link to={`${this.props.match.url}/2`}>ThumbArticle #2</Link></li>
                <li><Link to={`${this.props.match.url}/3`}>ThumbArticle #3</Link></li>
                <li><Link to={`${this.props.match.url}/4`}>ThumbArticle #4</Link></li>
            </ul>
        );
    }
}

export default ThumbArticle;