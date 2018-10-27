import React from 'react';//relative path
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import PageNotFound from '../components/PageNotFoundPage';
import Edit from '../components/EditExpensePage';
import Help from '../components/HelpPage';
import AddExpensePage from '../components/AddExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
             
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage}/>     
                <PrivateRoute path="/edit/:id" component={Edit} />            
                <Route path="/help" component={Help}/>            
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
