// libraries
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

// Pages
import App from './App'

const AppComponent = () => (
    <Router>
        <div id="appContainer">
            <Route path="/home" render={() => (
                <Redirect to="/"/>
            )}/>
            <Route exact path="/" component={App} />
            <Route path="/:id" component={App} />
            <Route path="/go/:id" component={App} />
        </div>
    </Router>
)

export default AppComponent
