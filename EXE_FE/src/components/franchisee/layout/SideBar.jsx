import {
  House,
  FileEarmark,
  Bell,
  Gear,
  People,
  BarChart,
  Folder,
  BoxArrowRight,
} from "react-bootstrap-icons";
import "./Sidebar.css";

const AppSidebar = () => {
  return (
    <div className="sidebar">
      <div className="avatar">
        <span>NT</span>
      </div>

      <nav className="sidebar-nav">
        <SidebarIcon icon={<House size={20} />} active />
        <SidebarIcon icon={<FileEarmark size={20} />} />
        <SidebarIcon icon={<Bell size={20} />} />
        <SidebarIcon icon={<People size={20} />} />
        <SidebarIcon icon={<BarChart size={20} />} />
        <SidebarIcon icon={<Folder size={20} />} />
        <SidebarIcon icon={<Gear size={20} />} />
      </nav>

      <div className="sidebar-footer">
        <SidebarIcon icon={<BoxArrowRight size={20} />} />
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const SidebarIcon = ({ icon, active = false }) => {
  return <div className={`sidebar-icon ${active ? "active" : ""}`}>{icon}</div>;
};

export default AppSidebar;
