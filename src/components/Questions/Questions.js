import React from 'react';
import Option from '../../Option/Option';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Questions.css'


const Questions = ({ EachQuestion }) => {
    const { correctAnswer, id, options, question } = EachQuestion;
    // console.log(EachQuestion);

    const showAnswer = (option) => {

    }


    return (
        <div className='Questions w-11/12 mx-auto text-xl text-left text-white shadow-md mb-4'>
            <div>
                <div className='flex justify-between bg-orange-500 py-4 px-4 rounded-tl-md rounded-tr-md text-3xl'>
                    {question}
                    <button onClick={showAnswer}>
                        <p><FontAwesomeIcon className='text-white-400 text-2xl' icon={faEye} /></p>
                    </button>
                </div>
            </div>
            <div className='bg-yellow-600 text-2xl px-2 py-2'>
                <div className='grid grid-cols-2 gap-2'>
                    {
                        options.map(option => <Option correctAnswer={correctAnswer} key={option.id} option={option}></Option>)

                    }
                </div>
            </div >
        </div >
    );
};

export default Questions;