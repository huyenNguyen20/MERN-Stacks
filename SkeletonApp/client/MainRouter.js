import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'

const MainRouter = () => {
    return (
       <Switch>
        <Route exact path="/" component={Home}/>
      </Switch> 
    )
}

export default MainRouter
