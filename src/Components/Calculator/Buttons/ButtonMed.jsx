import React from 'react';

export default function ButtonMed(props){
    
    return(
    <button className = 'calcBtnMed' onClick={props.onButtonPress}>
        {props.children}
    </button>
    );
}