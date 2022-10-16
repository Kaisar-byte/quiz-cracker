import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Topics from './components/Topics/Topics';
import Statistic from './components/Statistic/Statistic';
import Home from './components/Home/Home';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          loader: () => fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/topics',
          element: <Topics></Topics>
        },
        {
          path: '/statistics',
          element: <Statistic></Statistic>
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
