import QRCode from "./QRCode";
import PropTypes from 'prop-types';

const Infomation = ({ userData }) => {
    return (
        <div className="member-card p-4 w-100 p-3">
            <h3 className="text-center mb-4 fw-semibold">Thông tin thành viên</h3>
            <div className="row align-items-start ">
                <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
                    <QRCode />
                </div>
                <div className="col-12 col-md-8">
                    <div className="mb-3">
                        <p className="fs-5">{userData.fullName}</p>
                    </div>
                    <div className="mb-3">
                        <p className="mb-2" style={{ fontSize: 16 }}>
                            <span className="fw-medium mr-2">Email: </span>
                            {userData.email}
                        </p>
                    </div>
                    <div className="mb-3">
                        <p className="mb-2" style={{ fontSize: 16 }}>
                            <span className="fw-medium mr-2">phone: </span>
                            {userData.phone}
                        </p>
                    </div>
                    <div className="mb-3">
                        <p className="mb-2" style={{ fontSize: 16 }}>
                            <span className="fw-medium mr-2">Hạng thành viên: </span>
                            {userData.memberRank}
                        </p>
                    </div>
                    <div className="mb-3">
                        <p className="mb-2" style={{ fontSize: 16 }}>
                            <span className="fw-medium mr-2">Điểm tích lũy: </span>
                            {userData.memberPoint ? userData.memberPoint.toLocaleString() : 0} điểm
                        </p>
                    </div>
                    <div className="mb-3">
                        <p className="mb-2" style={{ fontSize: 16 }}>
                            <span className="fw-medium mr-2">Điểm đã sử dụng: </span>
                            {userData.usedPoints ? userData.usedPoints.toLocaleString() : 0} điểm
                        </p>
                    </div>
                    <div className="mb-3">
                        <p className="mb-2" style={{ fontSize: 16 }}>
                            <span className="fw-medium mr-2">Điểm còn lại: </span>
                            {userData.remainingPoints ? userData.remainingPoints.toLocaleString() : 0} điểm
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
Infomation.propTypes = {
    userData: PropTypes.shape({
        fullName: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        memberRank: PropTypes.string.isRequired,
        memberPoint: PropTypes.number.isRequired,
        usedPoints: PropTypes.number.isRequired,
        remainingPoints: PropTypes.number.isRequired,
    }).isRequired,
};

export default Infomation