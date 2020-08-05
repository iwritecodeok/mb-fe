import React from 'react';
import Screen from './Screen/Screen'
import Keypad from './Keypad/Keypad'
export default function Calculator(){
    return(
        <div className = 'calc_Body'>
            <Screen/>
            <Keypad/>
        </div>
    )
}