import React from 'react';

export default function button(props){
    
    return(
    <button className = 'calcBtn' onClick={props.onButtonPress}>
        {props.children}
    </button>
    );
}