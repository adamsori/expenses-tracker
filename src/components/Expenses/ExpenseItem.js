import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Cards';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // REACT HOOK useState -> retorna dois elementos, o valor atual do prop e uma funcao de update
    // Separated state per component instance
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>$ {props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;