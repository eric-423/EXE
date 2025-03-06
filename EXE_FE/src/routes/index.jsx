import MainRoutes from "./MainRoutes";
import { useRoutes } from "react-router-dom";

const RoutesComponent = () => {
  return useRoutes([MainRoutes]);
};

export default RoutesComponent;
