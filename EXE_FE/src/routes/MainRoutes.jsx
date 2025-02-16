import config from "../config";
import UserLayout from "../layouts/UserLayout";
import NotFound from "../pages/404";
import Home from "../pages/home";
import Login from "../pages/login";
import LoginPageEmployee from "../pages/loginemployee";
import LoginOTP from "../pages/loginotp";
import LoginPassword from "../pages/loginpassword";

//* ====================  Authorization for PUBLIC ==================== */
const MainRouter = () => {
    return <UserLayout />;
};

//* ==================== Define children routes ==================== */
const publicRoutes = {
    path: "/",
    element: <MainRouter />,
    children: [
        { path: config.routes.public.home, element: <Home /> },
        { path: config.routes.public.login, element: <Login /> },
        { path: config.routes.public.loginOTP, element: <LoginOTP /> },
        {
            path: config.routes.public.loginPassword,
            element: <LoginPassword />,
        },
        {
            path: config.routes.public.loginEmployee,
            element: <LoginPageEmployee />,
        },
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
