import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const Home = () => {
    const allquizs = useLoaderData()
    const [quizdata, setQuizdata] = useState(allquizs.data)
    return (
        <div>
            < div className='flex gap-3'>
                {
                    quizdata.map(quiz => <Quiz quiz={quiz}></Quiz>)
                }
            </div >

        </div >

    );
};

export default Home;