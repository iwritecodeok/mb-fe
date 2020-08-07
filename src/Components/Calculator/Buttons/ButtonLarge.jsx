import React from 'react';

export default function ButtonLarge(props){
    
    return(
    <button className = 'calcBtnLarge' onClick={props.onButtonPress}>
        {props.children}
    </button>
    );
}