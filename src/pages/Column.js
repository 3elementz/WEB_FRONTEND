import React from 'react';
import { SideMenu , Post } from '../components';
import { Route } from 'react-router-dom';

const Column = ({match}) => {
    return (
        <div>
            <SideMenu match={match}/>
            <Route exact path={match.url} component={Post}/>
            <Route path={`${match.url}/:columnid`} component={Post}/>
        </div>
    );
};

export default Column;