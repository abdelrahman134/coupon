
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles'; 

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

// import AddCoupon from './pages/addCoupon/addCoupon';
// import AddBanner from './pages/addBanner/AddBanner';
// import UpdateCoupon from './pages/updateCoupon/UpdateCoupon';
import { Suspense, lazy } from 'react';
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const AddCoupon = lazy(() => import("./pages/addCoupon/addCoupon"));
const AddBanner = lazy(() => import("./pages/addBanner/AddBanner"));
const UpdateCoupon = lazy(() => import("./pages/updateCoupon/UpdateCoupon"));


const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Rubik'
    },
  },
});
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addCoupon",
        element: <AddCoupon />,
      },
      ,
      {
        path: "/addBanner",
        element: <AddBanner />,
      },
      {
        path: "/update/:id",
        element: <UpdateCoupon />,
      },
    ],
  },
]);
function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<h1>...loading</h1>} >
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );}

export default App;
