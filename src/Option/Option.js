import React from 'react';
import Swal from 'sweetalert2'

const Option = ({ option, correctAnswer }) => {
    const handleOptionBtn = (option) => {
        const clickedAns = option
        if (clickedAns !== correctAnswer) {
            Swal.fire('You have selected a wrong answer')
        }
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