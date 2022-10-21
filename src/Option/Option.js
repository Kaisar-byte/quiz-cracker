import React from 'react';

const Option = ({ option, correctAnswer }) => {


    const handleOptionBtn = (option) => {


        // const rt = (option.value === correctAnswer.value) ? console.log('tick ache') : console.log('tick nai')
        const clickedAns = option
        if (clickedAns === correctAnswer) {
            alert('akon tick ache')
        } else {
            console.log('tick nai');
        }
        // console.log(correctAnswer)
        // console.log(clickedAns);

    }


    return (
        <div className='border-2 border-gray-300 rounded-md p-4 '>
            <button onClick={() => handleOptionBtn(option)}>
                <label for='answer' className='pl-4'>
                    <input type="radio" value={option} name='answerList' id='answer' />{option}
                </label>
            </button>
        </div>
    );
};

export default Option;