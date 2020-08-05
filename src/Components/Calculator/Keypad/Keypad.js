import React from 'react';
import ButtonRow from './Rows/ButtonRows';
import Button from '../Buttons/Button'
export default function Keypad(){

    return(
        <section className="keypad">
        {/* row 1 */}
        <ButtonRow>
        <Button>C</Button>
        <Button>&larr;</Button>
        <Button>%</Button>
        <Button>/</Button>
        </ButtonRow>
        {/* row 2 */}
        <ButtonRow>
        <Button>9</Button>
        <Button>8</Button>
        <Button>7</Button>
        <Button>*</Button>
        </ButtonRow>
        {/* row 3 */}
        <ButtonRow>
        <Button>6</Button>
        <Button>5</Button>
        <Button>4</Button>
        <Button>-</Button>
        </ButtonRow>
        {/* row 4 */}
        <ButtonRow>
        <Button>3</Button>
        <Button>2</Button>
        <Button>1</Button>
        <Button>+</Button>
        </ButtonRow>
        {/* row 5 */}
        <ButtonRow>
        <Button>0</Button>
        <Button>.</Button>
        <Button>=</Button>
        </ButtonRow>
        </section>
    )
}