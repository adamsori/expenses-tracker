import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Cards';
import ExpenseFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (expenseFilterData) => {
        setFilteredYear(prevFilteredYear => {
            console.log(expenseFilterData);
            return expenseFilterData;
        });
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {
                    // SOLUTION WITHOUT THE NEED TO CREATE A FUNCTION filteredExpenses
                    // props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear).map(filteredExpense => (
                    //     <ExpenseItem
                    //         key={filteredExpense.id}
                    //         title={filteredExpense.title}
                    //         amount={filteredExpense.amount}
                    //         date={filteredExpense.date}
                    //     />
                    // ))

                    filteredExpenses.map(filteredExpense => (
                        <ExpenseItem
                            key={filteredExpense.id}
                            title={filteredExpense.title}
                            amount={filteredExpense.amount}
                            date={filteredExpense.date}
                        />
                    ))
                }
            </Card>
        </div>
    );
}
export default Expenses;