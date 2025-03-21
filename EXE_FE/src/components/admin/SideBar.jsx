import { useState } from "react";
import PropTypes from "prop-types";
import { Home, Share2, User, Package, ChefHat, LogOut } from "lucide-react";
import Dashboard from "../../components/admin/Dashboard";
import Branches from "./Branches";
import { InfoCircle } from "react-bootstrap-icons";
import Infomation from "./Infomation";
import { BASE_URL } from "../../config/api";

const Sidebar = ({ onMenuClick }) => {

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem("_acc");
      const response = await fetch(`${BASE_URL}/users/logout/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
    } catch (error) {
      console.log(error)
    } finally {
      localStorage.removeItem("_acc");
      localStorage.removeItem("_ref");
      window.location.href = "/";
    }
  };

  return (
    <div
      className=" sidebar-admin d-flex flex-column h-100 position-fixed start-0 top-0 shadow"
      style={{
        width: "70px",
        zIndex: 50,
        backgroundColor: "rgb(218, 115, 57)",
      }}
    >
      <div className="d-flex align-items-center justify-content-center h-4 pt-4 mb-4">
        <div
          className="rounded-circle d-flex align-items-center justify-content-center bg-light text-success"
          style={{ width: "40px", height: "40px" }}
        >
          <span className="fw-bold small">Zuy</span>
        </div>
      </div>

      <div
        className="d-flex flex-column align-items-center "
        style={{ gap: "1rem" }}
      >
        <NavItem
          icon={<Home size={20} />}
          menu="home"
          onMenuClick={onMenuClick}
        />
        <NavItem
          icon={<Share2 size={20} />}
          menu="share"
          onMenuClick={onMenuClick}
        />
        <NavItem
          icon={<InfoCircle size={20} />}
          menu="infomation"
          onMenuClick={onMenuClick}
        />
        <NavItem
          icon={<LogOut size={20} />}
          menu="logout"
          onMenuClick={() => handleLogout()}
        // onClick={() => handleLogout()}
        />
      </div>
    </div>
  );
};

const NavItem = ({ icon, menu, onMenuClick }) => {
  return (
    <div
      onClick={() => onMenuClick(menu)}
      className={`nav-menu-admin text-white`}
    >
      {icon}
    </div>
  );
};

const MainComponent = () => {
  const [activeMenu, setActiveMenu] = useState("home");



  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "home":
        return <Dashboard />;
      case "share":
        return <Branches />;
      case "infomation":
        return <Infomation />;

      default:
        return null;
    }
  };

  return (
    <div className="container py-4 mt-5 mb-5">
      <div className="col-md-4">
        <Sidebar activeMenu={activeMenu} onMenuClick={handleMenuClick} />
      </div>
      <div className="col-md-12">{renderContent()}</div>
    </div>
  );
};

Sidebar.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
  activeMenu: PropTypes.string.isRequired,
};
NavItem.propTypes = {
  icon: PropTypes.element.isRequired,
  menu: PropTypes.string.isRequired,
  activeMenu: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

export default MainComponent;
