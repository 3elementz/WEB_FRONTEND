import React from 'react';
import { Board } from '../components';
import { Route, Link } from 'react-router-dom';

const ForumDetail = ({match}) => {
    return (
        <div>
            ForumDetail {match.url}
            <Board match={match}/>
        </div>
    );
};

export default ForumDetail;