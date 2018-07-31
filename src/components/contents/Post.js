import React, { Component } from 'react';

class Post extends Component {

    componentWillMount() {
        console.log('Post ',this.props)
    }

    render() {
        return (
            <div>
                Post {this.props.match.params.columnid}
            </div>
        );
    }
}

export default Post;