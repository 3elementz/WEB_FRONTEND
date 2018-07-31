import React from 'react';
import { ThumbArticle } from '../components';

const Media = ({match}) => {
    return (
        <div>
            <h2>Media</h2>
            <ThumbArticle match={match}/>
        </div>
    );
};

export default Media;