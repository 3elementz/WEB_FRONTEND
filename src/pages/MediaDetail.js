import React from 'react';
import { Article } from '../components';

const MediaDetail = ({match}) => {
    return (
        <div>
            MediaDetail {match.url}
            <Article match={match}/>
        </div>
    );
};

export default MediaDetail;