import { Outlet } from "react-router-dom";
import AppHeader from "../components/franchisee/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import AppSidebar from "../components/franchisee/layout/SideBar";
import RequestDashboard from "../pages/franchisee/request/RequestDashboard";
import RequestForm from "../pages/franchisee/request-form/RequestForm";

const FranchiseeLayout = () => {
  return (
    <>
      <AppHeader />

      <div className="d-flex min-vh-100">
        <div className=" d-flex flex-column pr-3">
          <AppSidebar />
        </div>
        <div className="flex-grow-1 p-4">
          <main>
            <RequestForm />
          </main>
        </div>
      </div>
    </>
  );
};

export default FranchiseeLayout;
