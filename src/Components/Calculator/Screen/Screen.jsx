import React from 'react';

import AnswerScreen from './AnswerScreen/AnswerScreen';
import ProblemScreen from './ProblemScreen/ProblemScreen';

export default function Screen(props){
    return(
        <section className = 'screenBody'>
            <AnswerScreen>{props.problem} = {props.answer}</AnswerScreen>
            <ProblemScreen>{props.problem}</ProblemScreen>
        </section>
    )
}