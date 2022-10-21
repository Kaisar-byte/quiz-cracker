import React from 'react';

const Blog = () => {
    return (
        <div className='mt-0 bg-gradient-to-r pt-10 pb-20  from-violet-500 to-fuchsia-500'>
            <div className='w-5/6 mx-auto mt-0 m-8 rounded-2xl border-2 bg-blue-500 text-2xl p-12 text-justify leading-8 shadow-sm shadow-orange-700'>
                <h2 className='font-bold pb-4'>What is the purpose of react router</h2>
                <hr className='mb-4' />
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
            </div>
            <div className='w-5/6 mx-auto m-8 rounded-2xl border-2 bg-lime-700 text-2xl p-12 text-justify leading-8 shadow-sm shadow-orange-700'>
                <h2 className='font-bold pb-4'>What is the purpose of react router</h2>
                <hr className='mb-4' />
                <p>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
                </p>
            </div>
            <div className='w-5/6 mx-auto m-8 rounded-2xl border-2 bg-blue-500 text-2xl p-12 text-justify leading-8 shadow-sm shadow-orange-700'>
                <h2 className='font-bold pb-4'>How is useState different from the useRef hook?</h2>
                <hr className='mb-4' />
                <p>useRef persists(store) values between renders BUT it does not re-render the component by any chance. Even when the initial value stored in a useRef is updated, useRef will not render the component and if peradventure another function causes the component to re-render, the reference value is persisted(stored). However, in the case of useState, any change in persisted data will cause the component to re-render.

                    useRef and useState hook also have different syntaxes:

                    const reference = useRef(initialValue);
                    The useRef hook is mutable, it returns a mutable ref object, so initialValue can be updated without it affecting the React lifecycle.

                    const [value, setValue] = useState();
                    The useState hook, on the other hand, is a reactive hook, it returns the value and a setValue function that is then used to update the state, the actions cause changes in the React lifecycle thereby causing the component to re-render.

                    To further drive home these points, let’s consider a simple example.

                    Example: Build a basic React application that shows the number of times a component renders on the screen.</p>
            </div>
        </div>
    );
};

export default Blog;