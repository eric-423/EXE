import QRCode from "./QRCode";
import PropTypes from 'prop-types';

const Infomation = ({ userData }) => {
    return (
        <div className="member-card p-4 w-100 ">
            <h3 className="text-center mb-4 fw-semibold">Thông tin thành viên</h3>
            <div className="row align-items-start">
                <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
                    <QRCode />
                </div>
                <div className="col-12 col-md-8">
                    <div className="mb-3">
                        <p className="fs-5">{userData.phone}</p>
                    </div>
                    <div className="mb-3">
                        <p className="mb-2">
                            <span className="fw-medium">Hạng thành viên: </span>
                            {userData.membershipLevel}
                        </p>
                    </div>
                    <div className="mb-3">
                        <p className="mb-2">
                            <span className="fw-medium">Điểm tích lũy: </span>
                            {userData.totalPoints.toLocaleString()} điểm
                        </p>
                    </div>
                    <div className="mb-3">
                        <p className="mb-2">
                            <span className="fw-medium">Điểm đã sử dụng: </span>
                            {userData.usedPoints.toLocaleString()} điểm
                        </p>
                    </div>
                    <div className="mb-3">
                        <p className="mb-2">
                            <span className="fw-medium">Điểm còn lại: </span>
                            {userData.remainingPoints.toLocaleString()} điểm
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
Infomation.propTypes = {
    userData: PropTypes.shape({
        phone: PropTypes.string.isRequired,
        membershipLevel: PropTypes.string.isRequired,
        totalPoints: PropTypes.number.isRequired,
        usedPoints: PropTypes.number.isRequired,
        remainingPoints: PropTypes.number.isRequired,
    }).isRequired,
};

export default Infomation