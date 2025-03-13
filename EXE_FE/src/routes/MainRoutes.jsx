import config from "../config";
import UserLayout from "../layouts/UserLayout";
import NotFound from "../pages/404";
import Home from "../pages/home";
import Menu from "../pages/menu/Menu";
import Login from "../pages/login";
import PaymentSuccessPage from "../pages/paymentsuccess";
import Checkout from './../components/checkoutPage/checkout';
import MemberInfo from "../pages/user/MemberInfo";
// import Login from "../pages/login/LoginPage";

//* ====================  Authorization for PUBLIC ==================== */
const MainRouter = () => {
  return <UserLayout />;
};

//* ==================== Define children routes ==================== */
const publicRoutes = {
  children: [
    {
      path: config.routes.public.home,
      element: <Home />
    },
    {
      path: config.routes.public.menu,
      element: <Menu />
    },
    {
      path: config.routes.public.login,
      element: <Login />
    },
    {
      path: config.routes.public.paymentSuccess,
      element: <PaymentSuccessPage />,
    },
    {
      path: config.routes.public.checkout,
      element: <Checkout />
    },
    {
      path: config.routes.public.user,
      element: <MemberInfo />,
    }
  ],
};

const notFoundRoutes = { path: "*", element: <NotFound /> };

//* ==================== Define main routes ==================== */
const MainRoutes = {
  path: "/",
  element: <MainRouter />,
  children: [publicRoutes, notFoundRoutes],
};

export default MainRoutes;
