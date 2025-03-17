import { User, Search, ShoppingBag, Gift, Home } from "lucide-react";
import PropTypes from 'prop-types';

const SideBar = ({ userData, setShowModal, activeMenu, onMenuClick }) => {
    return (
        <div className="member-card h-100">
            <div className="p-3 border-bottom border-warning text-center">
                <h5 className="fw-semibold">{userData.fullName}</h5>
                <div className="mt-3">
                    <button
                        className="btn btn-link text-danger p-0 small"
                        onClick={() => setShowModal(true)}
                    >
                        <span className="me-1">✏️</span> Chỉnh sửa
                    </button>
                </div>
            </div>

            {/* Menu navigation */}
            <div className="menu-container ">
                <div className={`menu-item ${activeMenu === 'memberInfo' ? 'active-menu-item' : ''}`} onClick={() => onMenuClick('memberInfo')}>
                    <User size={20} />
                    <span>Thông tin thành viên</span>
                </div>
                <div className={`menu-item ${activeMenu === 'orderLookup' ? 'active-menu-item' : ''}`} onClick={() => onMenuClick('orderLookup')}>
                    <Search size={20} />
                    <span>Tra cứu đơn hàng</span>
                </div>
                <div className={`menu-item ${activeMenu === 'purchaseHistory' ? 'active-menu-item' : ''}`} onClick={() => onMenuClick('purchaseHistory')}>
                    <ShoppingBag size={20} />
                    <span>Lịch sử mua hàng</span>
                </div>
                <div className={`menu-item ${activeMenu === 'offers' ? 'active-menu-item' : ''}`} onClick={() => onMenuClick('offers')}>
                    <Gift size={20} />
                    <span>Ưu đãi</span>
                </div>
                <div className={`menu-item ${activeMenu === 'deliveryAddress' ? 'active-menu-item' : ''}`} onClick={() => onMenuClick('deliveryAddress')}>
                    <Home size={20} />
                    <span>Địa chỉ giao hàng</span>
                </div>
            </div>
        </div>
    );
}

SideBar.propTypes = {
    userData: PropTypes.shape({
        fullName: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
    activeMenu: PropTypes.string.isRequired,
    onMenuClick: PropTypes.func.isRequired,
    setShowModal: PropTypes.func.isRequired,
};
export default SideBar;
