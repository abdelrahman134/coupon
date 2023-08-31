
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
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import AddCoupon from './pages/addCoupon/addCoupon';
import AddBanner from './pages/addBanner/AddBanner';
import UpdateCoupon from './pages/updateCoupon/UpdateCoupon';
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
  
  return( 
  <ThemeProvider theme={theme}>
  <RouterProvider router={router} />
  </ThemeProvider>
)}

export default App;
