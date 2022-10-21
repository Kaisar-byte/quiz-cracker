import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistics from './components/Statistics/Statistics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Topic from './components/Topic/Topic';
import Blog from './Blog/Blog';
import About from './About/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function App() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
    // AOS.refresh();
  }, []);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          loader: () => fetch(' https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: '/home',
          loader: () => fetch(' https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/topic/:topicId',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
          element: <Topic></Topic>
        },
        {
          path: '/statistics',
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Statistics></Statistics>
        }
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
