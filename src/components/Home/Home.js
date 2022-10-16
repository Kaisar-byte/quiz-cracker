import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const quizTopics = useLoaderData()
    const topics = quizTopics.data
    console.log(topics)
    return (
        <div>
            <h2>THis is home page</h2>
        </div>
    );
};

export default Home;