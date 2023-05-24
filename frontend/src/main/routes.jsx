import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

// import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'

export default props => (
    <div className='content-wrapper'>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)