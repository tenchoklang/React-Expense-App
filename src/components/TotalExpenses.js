import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral';


const getExpensesTotal = (expenses) => {
    let totalExpenses = 0;
    expenses.forEach(element => {
        totalExpenses = totalExpenses + element.amount;
    });
    return (
        <p>
            {expenses.length} Expense's Totalling: {numeral(totalExpenses/100).format('$0,0.00')}
        </p>
    );
}

const TotalExpenses = (props)=>(
    <div>
        {getExpensesTotal(props.expenses)}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
};


export default connect(mapStateToProps)(TotalExpenses);