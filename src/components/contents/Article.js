import React, { Component } from 'react';

class Article extends Component {

    componentWillMount() {
        console.log('Article ',this.props)
    }

    render() {
        return (
            <div>
                Article
            </div>
        );
    }
}

export default Article;