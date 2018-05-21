import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'

///components
import Home from './components/home'
import Post from './components/post'
import Profiles from './components/profiles'
import PostItem from './components/postitem'
import Life from './components/life'
import Conditional from './components/conditional'

const App=()=>{
    return (
        <BrowserRouter>
        <div>
            <header>
                 <NavLink to="/"> Home </NavLink> <br/> 
                 <NavLink to="/Post" activeStyle={{color:'red'}} activeClassName='selected'> Post </NavLink> <br/>   
                 <NavLink to={{
                     pathname:'/Profiles',
                 }} activeStyle={{color:'red'}} activeClassName='selected'> Profile </NavLink> <br/>   
                 <NavLink to="/Life"> Life </NavLink> <br/> 
                 <NavLink to="/Conditional"> Conditional </NavLink> <br/> 
            </header>
            <Switch>
                <Route path="/Post" exact component={Post} />
                <Route path="/Post/:id" exact component={PostItem} />
                <Route path="/Profiles" exact component={Profiles} />
                <Route path="/Life" exact component={Life} />
                <Route path="/Conditional" exact component={Conditional} />
                <Route path="/" exact component={Home} />
            </Switch>            
        </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>,document.querySelector("#root"))