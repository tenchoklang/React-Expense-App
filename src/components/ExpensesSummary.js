import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral';


const getExpensesTotal = (expenses) => {
    let totalExpenses = 0;
    expenses.forEach(element => {
        totalExpenses = totalExpenses + element.amount;
    });
    return (
        <div className="page-header">
            <div className="content-container">
                <h2 className="page-header__title">
                    <span>{expenses.length} </span>
                    Expense's Totaling: 
                    <span>{numeral(totalExpenses/100).format('$0,0.00')}</span>
                </h2>
                <div className="page-header__button">
                    <Link className="add-button" to="/create" >Add Expense</Link>
                </div>
            </div>
        </div>
    );
}

const ExpensesSummary = (props)=>(
    <div>
        {getExpensesTotal(props.expenses)}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    }; 
};


export default connect(mapStateToProps)(ExpensesSummary);