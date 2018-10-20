import React from 'react';//relative path
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters';
import TotalExpenses from './TotalExpenses';

const ExpenseDashboardPage = () => (
    <div>
        <TotalExpenses />
        <ExpenseListFilter />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;