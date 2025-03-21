import { Bold } from 'lucide-react'
import { PropTypes } from 'prop-types';
import { BASE_URL } from '../../config/api';
import { useEffect, useState } from 'react';


const BranchInfo = ({ branchMembers }) => {

    const [branches, setBranches] = useState([]);
    const [branchId, setBranchId] = useState(1);
    const [branchName, setBranchName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [isFranchise, setIsFranchise] = useState(true);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [metric, setMetric] = useState({});
    const [error, setError] = useState("");

    useEffect(() => {
        fetchBranch();
    }, []);

    const fetchBranch = async () => {
        const defaultLocation = "146 Nguyễn Thị Kiểu, Hiệp Thành, Quận 12, Hồ Chí Minh, Việt Nam"
        try {
            const response = await fetch(`${BASE_URL}/branches/distance?destination=${defaultLocation}`);
            const data = await response.json();
            setBranches(data.data);

            setBranchName(data.data[0].branch.name);
            setAddress(data.data[0].branch.address);
            setPhone(data.data[0].branch.phone);
            setIsFranchise(data.data[0].branch.parent);

        } catch (error) {
            console.log(error);
        }
    }


    const fetchBranchStatistics = async () => {
        try {
            const response = await fetch(`${BASE_URL}/orders/metric/AI/${branchId}?startDate=${startDate}&endDate=${endDate}`);
            const data = await response.json();
            setMetric(data.data);

        } catch (error) {
            setError("AI lỗi rồi  !! Vui lòng thử lại sau")
            console.log(error)
        }
    }


    return (
        <div className=" container py-4 pb-0">
            <div className="row mb-2 branch-content ">
                <div className="col-md-8 mb-3 ">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title fw-bold mb-4 mt-2">Thống kê chi nhánh</h5>

                            <div >
                                <select
                                    className="form-select mb-2"
                                    onChange={(e) => {
                                        const selectedBranch = branches.find(branch => branch.branch.id === parseInt(e.target.value));
                                        setBranchId(selectedBranch.branch.id);
                                        setBranchName(selectedBranch.branch.name);
                                        setAddress(selectedBranch.branch.address);
                                        setPhone(selectedBranch.branch.phone);
                                        setIsFranchise(selectedBranch.branch.parent);
                                    }}
                                >
                                    {
                                        branches.map((branch) => (
                                            <option
                                                key={branch.branch.id}
                                                value={branch.branch.id}
                                            >
                                                {branch.branch.name} - {branch.branch.address} ({branch.distance}km)
                                            </option>
                                        ))
                                    }
                                </select>


                                <div>
                                    <div className="d-flex gap-3 mb-4">
                                        <div className="flex-grow-1">
                                            <label className="form-label">Từ</label>
                                            <div className="d-flex gap-2">
                                                <select className="form-control" onChange={(e) => {
                                                    const month = e.target.value.split(" ")[1];
                                                    const day = document.querySelectorAll('input[placeholder="Ngày"]')[0].value;
                                                    const year = document.querySelectorAll('input[placeholder="Năm"]')[0].value;
                                                    if (month && day && year) {
                                                        setStartDate(`${month}/${day}/${year}`);
                                                    }
                                                }}>
                                                    <option>Tháng 1</option>
                                                    <option>Tháng 2</option>
                                                    <option>Tháng 3</option>
                                                    <option>Tháng 4</option>
                                                    <option>Tháng 5</option>
                                                    <option>Tháng 6</option>
                                                    <option>Tháng 7</option>
                                                    <option>Tháng 8</option>
                                                    <option>Tháng 9</option>
                                                    <option>Tháng 10</option>
                                                    <option>Tháng 11</option>
                                                    <option>Tháng 12</option>
                                                </select>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Ngày"
                                                    min="1"
                                                    max="31"
                                                    onChange={(e) => {
                                                        const month = document.querySelectorAll('select')[1].value.split(" ")[1];
                                                        const year = document.querySelectorAll('input[placeholder="Năm"]')[0].value;
                                                        if (month && e.target.value && year) {
                                                            setStartDate(`${month}/${e.target.value}/${year}`);
                                                        }
                                                    }}
                                                />
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Năm"
                                                    min="2000"
                                                    onChange={(e) => {
                                                        const month = document.querySelectorAll('select')[1].value.split(" ")[1];
                                                        const day = document.querySelectorAll('input[placeholder="Ngày"]')[0].value;
                                                        if (month && day && e.target.value) {
                                                            setStartDate(`${month}/${day}/${e.target.value}`);
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex-grow-1">
                                            <label className="form-label">Đến</label>
                                            <div className="d-flex gap-2">
                                                <select className="form-control" onChange={(e) => {
                                                    const month = e.target.value.split(" ")[1];
                                                    const day = document.querySelectorAll('input[placeholder="Ngày"]')[1].value;
                                                    const year = document.querySelectorAll('input[placeholder="Năm"]')[1].value;
                                                    if (month && day && year) {
                                                        setEndDate(`${month}/${day}/${year}`);
                                                    }
                                                }}>
                                                    <option>Tháng 1</option>
                                                    <option>Tháng 2</option>
                                                    <option>Tháng 3</option>
                                                    <option>Tháng 4</option>
                                                    <option>Tháng 5</option>
                                                    <option>Tháng 6</option>
                                                    <option>Tháng 7</option>
                                                    <option>Tháng 8</option>
                                                    <option>Tháng 9</option>
                                                    <option>Tháng 10</option>
                                                    <option>Tháng 11</option>
                                                    <option>Tháng 12</option>
                                                </select>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Ngày"
                                                    min="1"
                                                    max="31"
                                                    onChange={(e) => {
                                                        const month = document.querySelectorAll('select')[2].value.split(" ")[1];
                                                        const year = document.querySelectorAll('input[placeholder="Năm"]')[1].value;
                                                        if (month && e.target.value && year) {
                                                            setEndDate(`${month}/${e.target.value}/${year}`);
                                                        }
                                                    }}
                                                />
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Năm"
                                                    min="2000"
                                                    onChange={(e) => {
                                                        const month = document.querySelectorAll('select')[2].value.split(" ")[1];
                                                        const day = document.querySelectorAll('input[placeholder="Ngày"]')[1].value;
                                                        if (month && day && e.target.value) {
                                                            setEndDate(`${month}/${day}/${e.target.value}`);
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-end'>
                                            {
                                                error && (
                                                    <strong style={{ color: "red", position: 'absolute', top: 10, right: '40%' }}> {error} </strong>
                                                )
                                            }
                                            <button className="btn btn-primary height " onClick={() => {
                                                fetchBranchStatistics();
                                            }}>
                                                Tính toán
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>



                            <div className="branch-detail">
                                <h6 className="m-0" style={{ fontWeight: "lighter" }}>Tên chi nhánh</h6>
                                <strong style={{ fontWeight: Bold }}>{branchName} </strong>
                            </div>

                            <div className="branch-detail">
                                <h6 className="m-0" style={{ fontWeight: "lighter" }}>Địa chỉ</h6>
                                <strong style={{ fontWeight: Bold }}>{address}</strong>
                            </div>

                            <div className=" branch-detail">
                                <h6 className="m-0" style={{ fontWeight: "lighter" }}>Số điện thoại</h6>
                                <strong style={{ fontWeight: Bold }}>{phone}</strong>
                            </div>

                            <div className=" branch-detail">
                                <h6 className="m-0" style={{ fontWeight: "lighter" }}>Nhượng quyền</h6>
                                <strong
                                    style={{ fontWeight: Bold }}
                                >
                                    {isFranchise ? "Chính thức" : "Nhượng quyền"}
                                </strong>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="   col-md-4 mb-3">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h6
                                className="card-title fw-bold mb-4 mt-2"
                                style={{ fontSize: 25, textAlign: 'center' }}
                            >
                                Tổng Quan
                            </h6>
                            <div className="d-grid mb-3" style={{ gap: 10 }} >
                                <strong>
                                    TotalCustomers : {metric.totalCustomers}
                                </strong>
                                <strong>
                                    TotalAmount : {metric.totalAmount}
                                </strong>
                                <strong>
                                    TotalShippingFees : {metric.totalShippingFees}
                                </strong>
                                <strong>
                                    AverageOrderValue : {metric.averageOrderValue}
                                </strong>
                                <strong>
                                    AverageShippingFee : {metric.averageShippingFee}
                                </strong>
                                <strong>
                                    AverageShippingFee : {metric.totalOrders}
                                </strong>
                                <strong>
                                    AverageShippingFee : {metric.totalSubtotal}
                                </strong>
                            </div>

                            <div className="branch-manager" style={{ gap: 10 }}>
                                <h6>Khách hàng đặt hàng nhiều nhất</h6>
                                {
                                    metric && metric.customerOrderCounts && Object.entries(metric.customerOrderCounts).map(([user, quantity]) => (
                                        <strong key={user}>{user}: {quantity} <br /></strong>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="ship-tracking row mb-4">


                <div className="col-md-4 mb-3">
                    <div className="branch-manager">
                        <div>
                            <h4 className='mb-3'>Sản Phẩm Bán Chạy</h4>
                            {
                                metric && metric.topSellingProducts && Object.entries(metric.topSellingProducts).map(([product, quantity]) => (
                                    <div key={product} className="d-grid mb-3" style={{ gap: 10 }}>
                                        <strong>{product}: {quantity}</strong>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="branch-manager">
                        <div>
                            <h4 className='mb-3'>Tổng sản phẩm đã bán</h4>
                            {
                                metric && metric.totalItemsSold && Object.entries(metric.totalItemsSold).map(([sold, quantity]) => (
                                    <div key={sold} className="d-grid mb-3" style={{ gap: 10 }}>
                                        <strong>{sold}: {quantity}</strong>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="branch-manager">
                        <div>
                            <h4 className='mb-3'>Trạng thái đơn hàng</h4>
                            {
                                metric && metric.orderStatusCounts && Object.entries(metric.orderStatusCounts).map(([status, quantity]) => (
                                    <div key={status} className="d-grid mb-3" style={{ gap: 10 }}>
                                        <strong>{status}: {quantity}</strong>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
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
        </div >
    )
}

BranchInfo.propTypes = {
    branchMembers: PropTypes.array.isRequired,
}

export default BranchInfo