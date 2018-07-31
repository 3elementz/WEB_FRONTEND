import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return (
        <div>
            <ul>
                <li><NavLink exact to="/">3ELEMENTZ</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>연구소 소개</NavLink></li>
                <li><NavLink exact to="/forum" activeStyle={activeStyle}>포럼</NavLink></li>
                <li><NavLink to="/column" activeStyle={activeStyle}>칼럼</NavLink></li>
                <li><NavLink exact to="/media" activeStyle={activeStyle}>미디어</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;