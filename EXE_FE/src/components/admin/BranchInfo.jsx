import { Bold } from 'lucide-react'
import { PropTypes } from 'prop-types';

const BranchInfo = ({ shipTrackingToday, shipTrackingNextDay, branchMembers }) => {
    return (
        <div className=" container py-4 pb-0">
            <div className="row mb-2 branch-content ">
                <div className="col-md-8 mb-3 ">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title fw-bold mb-3 mt-2">Thông Tin Chi Nhánh</h5>

                            <div className="branch-detail">
                                <h6 className="m-0" style={{ fontWeight: "lighter" }}>Tên chi nhánh</h6>
                                <strong style={{ fontWeight: Bold }}>Tấm Tắc - HAHA </strong>
                            </div>

                            <div className="branch-detail">
                                <h6 className="m-0" style={{ fontWeight: "lighter" }}>Đại chẻ</h6>
                                <strong style={{ fontWeight: Bold }}>HAHAHAHAHAH</strong>
                            </div>

                            <div className=" branch-detail">
                                <h6 className="m-0" style={{ fontWeight: "lighter" }}>Số điện thoại</h6>
                                <strong style={{ fontWeight: Bold }}> 1123123212</strong>
                            </div>

                            <div className=" branch-detail">
                                <h6 className="m-0" style={{ fontWeight: "lighter" }}>Nhượng quyền</h6>
                                <strong
                                    style={{ fontWeight: Bold }}
                                >
                                    Nâu
                                </strong>
                            </div>

                            <div className=" branch-detail">
                                <h6 className="m-0" style={{ fontWeight: "lighter" }}>Ngày khai trương</h6>
                                <strong style={{ fontWeight: Bold }}> 01/01/2222</strong>
                            </div>

                            <div className=" branch-detail">
                                <h6 className="m-0" style={{ fontWeight: "lighter" }}>Đánh gái</h6>
                                <strong style={{ fontWeight: Bold }}> 1.7/5.0</strong>
                                <p>tổng số đánh giá: 10.000</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="   col-md-4 mb-3">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h6
                                className="card-title fw-bold mb-4 mt-2"
                                style={{ fontSize: 25 }}
                            >
                                Người Quản Lý
                            </h6>
                            <p className="m-0 mb-2">sủ cở hẻo</p>
                            <div className="branch-manager">
                                <p className="mb-1">MINZ</p>
                                <p className="mb-1">SĐT: 0909 090 090</p>
                                <p className="mb-0">Email: manager@example.com</p>
                            </div>

                            <p className="m-0 mb-2">Quỏn lé</p>
                            <div className="branch-manager">
                                <p className="mb-1">Lê Minh Zuy</p>
                                <p className="mb-1">SĐT: 0909 090 090</p>
                                <p className="mb-0">Email: Zuy@example.com</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="ship-tracking row mb-4">
                <div className="col-12 mb-2">
                    <h5 className="fw-bold">Lộ trình giao hàng</h5>
                </div>

                <div className="col-md-6 mb-3">

                    <span className="badge bg-success mb-2">Hôm nay</span>
                    {
                        shipTrackingToday.map((item) => (
                            <div className="card mb-3" key={item.id}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h6 className="card-title fw-bold">{item.name}</h6>
                                        <strong
                                            style={{
                                                color: "green",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {item.status}
                                        </strong>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h8 className="card-title fw-bold">Thời gian</h8>
                                        <strong
                                            style={{
                                                color: "brown",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {item.time}
                                        </strong>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h8 className="card-title fw-bold">Số lượng</h8>
                                        <strong>
                                            {item.quantity}
                                        </strong>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h8 className="card-title fw-bold">Lần giao trước</h8>
                                        <strong>
                                            {item.lastDelivery}
                                        </strong>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h8 className="card-title fw-bold">Chất lượng</h8>
                                        <strong
                                            style={{
                                                color: "green",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {item.quality}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>


                {/* next */}
                <div className="col-md-6 mb-3">
                    <span className="badge bg-warning mb-2">Sắp tứi</span>
                    {
                        shipTrackingNextDay.map((item) => (
                            <div className="card mb-3" key={item.id}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h6 className="card-title fw-bold">{item.name}</h6>
                                        <strong
                                            style={{
                                                color: "green",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {item.status}
                                        </strong>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h8 className="card-title fw-bold">Thời gian</h8>
                                        <strong
                                            style={{
                                                color: "brown",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {item.time}
                                        </strong>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h8 className="card-title fw-bold">Số lượng</h8>
                                        <strong>
                                            {item.quantity}
                                        </strong>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h8 className="card-title fw-bold">Lần giao trước</h8>
                                        <strong>
                                            {item.lastDelivery}
                                        </strong>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h8 className="card-title fw-bold">Chất lượng</h8>
                                        <strong
                                            style={{
                                                color: "green",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {item.quality}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>

            </div>

            {/* Row 3: Nhân viên chi nhánh */}
            <div className="row mb-4 branch-members">
                <div className="col-12 mb-2">
                    <h5 className="fw-bold mb-3">Nhân viên chi nhánh</h5>
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-striped mb-0">
                                <thead>
                                    <tr>
                                        <th>Họ và Tên</th>
                                        <th>Email</th>
                                        <th>Ngày vào làm</th>
                                        <th>Số điện thoại</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        branchMembers.map((member) => (
                                            <tr key={member.id}>
                                                <td>{member.name}</td>
                                                <td>{member.email}</td>
                                                <td>{member.createdAt}</td>
                                                <td>{member.phoneNumber}</td>
                                                <td style={member.status === "Active" ? { color: "green" } : { color: "red" }}>
                                                    {member.status}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

BranchInfo.propTypes = {
    shipTrackingToday: PropTypes.array.isRequired,
    shipTrackingNextDay: PropTypes.array.isRequired,
    branchMembers: PropTypes.array.isRequired,
}

export default BranchInfo