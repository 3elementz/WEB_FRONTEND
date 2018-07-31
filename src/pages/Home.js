import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {

    componentWillMount() {
        console.log('Home ',this.props)
    }

    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

export default Home;