import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    const topicData = useLoaderData();
    const { data } = topicData
    return (
        <div>
            <div>
                <div className='flex flex-col w-full h-32 Home sm:pl-2 pl-24 justify-center items-end'>
                    <div data-aos="fade-up" className='text-white grid grid-cols-1 text-right rounded-2xl p-8 shadow-xl w-3/5'>
                        <h2 className='text-left text-6xl mb-4 text-white-300 bg-blue-600 py-4 px-4 rounded-md shadow shadow-white-200'>Online-Quiz-Test</h2>
                        <p className='text-2xl mr-4 text-justify leading-10 text-white-300 bg-yellow-500 rounded shadow-lg p-4'>Online Quiz Test App is an online base learing platform. This is the actual path for learning and building strong foundation in any arena. </p>
                    </div>
                </div>
            </div>
            <div className='md:grid grid-cols-4 gap-2 justify-center item-center m-8 '>
                {
                    data.map(topic => <Topics key={topic.id} topic={topic}></Topics>)

                }
            </div>
        </div >
    );
};

export default Home;