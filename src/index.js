import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import ItemContainer from './components/ItemContainer';
import NewForm from './components/NewForm';
import HomePage from './components/HomePage.js';
import DetailedPage from './components/DetailedPage';


const routes = [
  {
  path: "/",
  element: <App />,
  errorElement: <div>Ope Somthing Went Wrong</div>,
  children: [
    { index: true, element: <HomePage /> },
    {
      path: "gallery",
      element: <ItemContainer />
    },
    {
      path: "New",
      element: <NewForm />
    },
    {
      path:"Gallery/:id",
      element: <DetailedPage />
    }
  ]
}
]

const router = createBrowserRouter(routes)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><RouterProvider router={router} /></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
