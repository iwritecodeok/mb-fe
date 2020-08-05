import React from 'react';

export default function button(props){
    return(
    <button className = 'calcBtn'>
        {props.children}
    </button>
    );
}