import config from "../config";
import UserLayout from "../layouts/UserLayout";
import NotFound from "../pages/404";
import Home from "../pages/home";
import Menu from "../pages/menu/Menu";

//* ====================  Authorization for PUBLIC ==================== */
const MainRouter = () => {
  return <UserLayout />;
};

//* ==================== Define children routes ==================== */
const publicRoutes = {
  children: [
    { path: config.routes.public.home, element: <Home /> },
    { path: config.routes.public.menu, element: <Menu /> },
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
