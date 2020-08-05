import React from 'react';

import AnswerScreen from './AnswerScreen/AnswerScreen';
import ProblemScreen from './ProblemScreen/ProblemScreen';

export default function Screen(){
    return(
        <section className = 'screenBody'>
            <AnswerScreen/>
            <ProblemScreen/>
        </section>
    )
}