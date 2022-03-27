import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Cards';
import './Expenses.css';

const Expenses = (props) => {
    const listItems = props.items.map(item => {
        return (
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        );
    })
    return (
        <Card className="expenses">
            {
                listItems
            }
        </Card>
    );
}
export default Expenses;