import FranchiseeLayout from "../layouts/FranchiseeLayout";
import config from "../config";
import RequestDashboard from "../pages/franchisee/request/RequestDashboard";

const FranchiseeRouter = () => {
  return <FranchiseeLayout />;
};

const FranchiseeRoutes = {
  path: config.routes.franchisee.home,
  element: <FranchiseeRouter />,
  children: [
    {
      path: config.routes.franchisee.request,
      element: <RequestDashboard />,
    },
  ],
};

export default FranchiseeRoutes;
