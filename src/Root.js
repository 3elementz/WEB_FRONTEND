import React, { Component } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import { Home, Forum, ForumDetail, Media, MediaDetail, Column, About } from './pages';
import { Menu, Footer } from './components';

class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    {/* switch는 매칭되는 첫번째 컴포넌트만 보여줌. */}
                    <Switch> 
                        <Route path="/forum/:forumid" component={ForumDetail}/>
                        <Route path="/forum" component={Forum}/>
                    </Switch>
                    <Switch> 
                        <Route path="/media/:mediaid" component={MediaDetail}/>
                        <Route path="/media" component={Media}/>
                    </Switch>
                    <Route path="/column" component={Column}/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Root;