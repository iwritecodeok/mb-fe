import React from 'react';

export default function HistoryItem(props){
    return(
        <section className='historyItem'>
        <p>{props.history.problem} = {props.history.answer}</p>
        
            
        </section>
    )
}