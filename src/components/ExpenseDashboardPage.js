import React from 'react';//relative path
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;