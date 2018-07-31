import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SideMenu extends Component {

    componentWillMount() {
        console.log('SideMenu ',this.props)
    }

    render() {
        return (
            <ul>
                <li><Link to={`${this.props.match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${this.props.match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${this.props.match.url}/3`}>Post #3</Link></li>
                <li><Link to={`${this.props.match.url}/4`}>Post #4</Link></li>
           </ul>
        );
    }
}

export default SideMenu;