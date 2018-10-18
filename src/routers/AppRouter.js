import React from 'react';//relative path
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import PageNotFound from '../components/PageNotFoundPage';
import Edit from '../components/EditExpensePage';
import Help from '../components/HelpPage';
import AddExpensePage from '../components/AddExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>     
                <Route path="/edit/:id" component={Edit} />            
                <Route path="/help" component={Help}/>            
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;
