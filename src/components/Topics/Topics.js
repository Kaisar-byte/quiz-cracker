import React from 'react';

const Topics = ({ topic }) => {
    console.log(topic);
    const { name, logo, total } = topic

    return (
        <div>
            <div className='border-2 rounded-xl bg-cyan-300 p-4 flex gap-12'>
                <div>
                    <img className='w-40 p-8 border-2 rounded-full bg-red-400' src={logo} alt="" />
                </div>
                <div>
                    <p>Quiz : {name}</p>
                    <p>Total Quiz{total}</p>
                    <button>Practice Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default Topics;