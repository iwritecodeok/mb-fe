import React from 'react';
import ButtonRow from './Rows/ButtonRows';
import Button from '../Buttons/Button'

export default function Keypad(props){

    return(
        <section className="keypad">
        {/* row 1 */}
        <ButtonRow>
        <Button onButtonPress={props.onButtonPress}>C</Button>
        <Button onButtonPress={props.onButtonPress}>&larr;</Button>
        <Button onButtonPress={props.onButtonPress}>%</Button>
        <Button onButtonPress={props.onButtonPress}>/</Button>
        </ButtonRow>
        {/* row 2 */}
        <ButtonRow>
        <Button onButtonPress={props.onButtonPress}>9</Button>
        <Button onButtonPress={props.onButtonPress}>8</Button>
        <Button onButtonPress={props.onButtonPress}>7</Button>
        <Button onButtonPress={props.onButtonPress}>*</Button>
        </ButtonRow>
        {/* row 3 */}
        <ButtonRow>
        <Button onButtonPress={props.onButtonPress}>6</Button>
        <Button onButtonPress={props.onButtonPress}>5</Button>
        <Button onButtonPress={props.onButtonPress}>4</Button>
        <Button onButtonPress={props.onButtonPress}>-</Button>
        </ButtonRow>
        {/* row 4 */}
        <ButtonRow>
        <Button onButtonPress={props.onButtonPress}>3</Button>
        <Button onButtonPress={props.onButtonPress}>2</Button>
        <Button onButtonPress={props.onButtonPress}>1</Button>
        <Button onButtonPress={props.onButtonPress}>+</Button>
        </ButtonRow>
        {/* row 5 */}
        <ButtonRow>
        <Button onButtonPress={props.onButtonPress}>0</Button>
        <Button onButtonPress={props.onButtonPress}>.</Button>
        <Button onButtonPress={props.onButtonPress}>=</Button>
        </ButtonRow>
        </section>
    )
}