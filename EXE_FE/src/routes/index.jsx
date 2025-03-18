import FranchiseeRoutes from "./FranchiseeRoutes";
import MainRoutes from "./MainRoutes";
import { useRoutes } from "react-router-dom";

const RoutesComponent = () => {
  return useRoutes([MainRoutes, FranchiseeRoutes]);
};

export default RoutesComponent;
