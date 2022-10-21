import React from 'react';
import Swal from 'sweetalert2'

const Option = ({ option, correctAnswer, showans, setShowans }) => {


    const handleOptionBtn = (option) => {
        const clickedAns = option
        if (clickedAns !== correctAnswer) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong Answer!',
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Thats the right answer'
            })
        }
    }
    return (

        <div className='border-2 border-gray-300 rounded-md p-4 '>
            <button onClick={() => handleOptionBtn(option)}>

                <label for='answer' className='pl-4 showans'>
                    <input type="radio" value={option} name='answerList' id='answer' />{option}
                </label>
            </button>
        </div>
    );
};

export default Option;