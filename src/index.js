import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'

///components
import Home from './components/home'
import Post from './components/post'
import Profiles from './components/profiles'


const App=()=>{
    return (
        <BrowserRouter>
        <div>
            <header>Header </header>
            <Route path="/" exact component={Home} />
            <Route path="/Post" exact component={Post} />
            <Route path="/Profiles" exact component={Profiles} />
        </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>,document.querySelector("#root"))