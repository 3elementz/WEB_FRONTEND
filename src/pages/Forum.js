import React from 'react';
import { ThumbBoard, Board } from '../components';
import { Route } from 'react-router-dom';

const Forum = ({match}) => {
    return (
        <div>
            <ThumbBoard match={match}/>
        </div>
    );
};

export default Forum;