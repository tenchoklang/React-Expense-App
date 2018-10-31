import React from 'react';//relative path
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startAddExpenses} from '../actions/expenses.js';

const AddExpensePage = (props) => (
    <div>
        <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
        </div>
        </div>
        <div className="content-container">
            <ExpenseForm 
            onSubmit={(expense)=>{
                // props.dispatch(addExpense(expense));
                props.dispatch(startAddExpenses(expense));
                //we get access to the history in the props because this component was specified inside the
                //<Route>. push allows us to redirect the user to the specified path
                props.history.push('/');
            }}
            />
        </div>
    </div>
);

export default connect()(AddExpensePage);
