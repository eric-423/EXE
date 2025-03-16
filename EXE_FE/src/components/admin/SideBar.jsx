import { useState } from 'react';
import PropTypes from 'prop-types';
import { Home, Share2, User, Package, ChefHat } from 'lucide-react';
import Dashboard from '../../components/admin/Dashboard';
import Branches from './Branches';
import { InfoCircle } from 'react-bootstrap-icons';
import Infomation from './Infomation';

const Sidebar = ({ onMenuClick }) => {
    return (
        <div className=" sidebar-admin d-flex flex-column h-100 position-fixed start-0 top-0 shadow"
            style={{ width: '70px', zIndex: 50, backgroundColor: "rgb(218, 115, 57)" }}
        >
            <div className="d-flex align-items-center justify-content-center h-4 pt-4 mb-4">
                <div className="rounded-circle d-flex align-items-center justify-content-center bg-light text-success" style={{ width: '40px', height: '40px' }}>
                    <span className="fw-bold small">Zuy</span>
                </div>
            </div>

            <div className="d-flex flex-column align-items-center " style={{ gap: '1rem' }}>
                <NavItem icon={<Home size={20} />} menu="home" onMenuClick={onMenuClick} />
                <NavItem icon={<Share2 size={20} />} menu="share" onMenuClick={onMenuClick} />
                <NavItem icon={<User size={20} />} menu="profile" onMenuClick={onMenuClick} />
                <NavItem icon={<Package size={20} />} menu="packages" onMenuClick={onMenuClick} />
                <NavItem icon={<ChefHat size={20} />} menu="recipes" onMenuClick={onMenuClick} />
                <NavItem icon={<InfoCircle size={20} />} menu="infomation" onMenuClick={onMenuClick} />
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
    const [activeMenu, setActiveMenu] = useState('home');

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    const renderContent = () => {
        switch (activeMenu) {
            case 'home':
                return <Dashboard />;
            case 'share':
                return <Branches />;
            case 'profile':
                return <div>Profile Content</div>;
            case 'packages':
                return <div>Packages Content</div>;
            case 'recipes':
                return <div>Recipes Content</div>;
            case 'infomation':
                return <Infomation />
            default:
                return null;
        }
    };

    return (
        <div className="container py-4 mt-5 mb-5">
            <div className="col-md-4">
                <Sidebar activeMenu={activeMenu} onMenuClick={handleMenuClick} />
            </div>
            <div className="col-md-12">
                {renderContent()}
            </div>
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
