import React from 'react';

export default function HistoryItem(props){
    console.log("history Item", props)
    return(
        <section className='historyItem'>
        <p>{props.history.problem} = {props.history.answer}</p>
        
            
        </section>
    )
}