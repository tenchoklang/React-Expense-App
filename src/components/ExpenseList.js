import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div className="expense-list">
        <div className="content-container">
            <div className="expense-list__title">
                <h2> Expense List </h2>
            </div>
        </div>
        <div>
            {props.expenses.map( (expense)=>{
                return <ExpenseListItem key={expense.id} {...expense}/>;
            })}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        //applies the filters
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

