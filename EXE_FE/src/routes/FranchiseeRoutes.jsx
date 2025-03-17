import FranchiseeLayout from "../layouts/FranchiseeLayout";
import config from "../config";
import RequestDashboard from "../pages/franchisee/request/RequestDashboard";
import RequestForm from "../pages/franchisee/request-form/RequestForm";

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
    {
      path: config.routes.franchisee.requestForm,
      element: <RequestForm />,
    },
  ],
};

export default FranchiseeRoutes;
