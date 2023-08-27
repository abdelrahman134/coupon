
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import AddCoupon from './pages/addCoupon/addCoupon';
import AddBanner from './pages/addBanner/AddBanner';
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
    ],
  },
]);
function App() {
  
  return <RouterProvider router={router} />;
}

export default App;
