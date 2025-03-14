import { useState } from 'react';
import { Filter } from 'lucide-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Props from "prop-types"


const LocationStatCard = ({ branches }) => {
    return (
        <div className="container py-4" style={{ backgroundColor: 'transparent' }}>
            <h3 className="mb-3">Hiệu Suất Chi Nhánh</h3>
            <div className="card p-3 bg-white">
                {branches.map((branch, index) => (
                    <BranchCard key={index} branch={branch} />
                ))}
            </div>
        </div>
    );

};

const BranchCard = ({ branch }) => {
    return (
        <div className="mb-3 border-bottom pb-3">
            <div className="d-flex justify-content-between align-items-center">
                <h5>{branch.name}</h5>
                <span className={`badge bg-${branch.statusClass}`}>{branch.status}</span>
            </div>
            <p className="mb-1">Giờ cao điểm: {branch.peakTime} | TB phục vụ: {branch.avgServiceTime} phút</p>
            <div className="row text-center">
                <div className="col-4">
                    <p>Doanh Thu</p>
                    <h4>{branch.revenue}</h4>
                    <span className="text-success">{branch.revenueChange}</span>
                </div>
                <div className="col-4">
                    <p>Đơn Hàng</p>
                    <h4>{branch.orders}</h4>
                    <span className="text-success">{branch.ordersChange}</span>
                </div>
                <div className="col-4">
                    <p>Đánh Giá</p>
                    <h4>{branch.rating}</h4>
                    <span className={branch.ratingChange.includes('-') ? "text-danger" : "text-success"}>
                        {branch.ratingChange}
                    </span>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-6">Nhân viên: <strong>{branch.staff} người</strong></div>
                <div className="col-6">Món bán chạy: <strong>{branch.bestSeller}</strong></div>
            </div>
        </div>
    );
};


const StatusTag = ({ status, children, className }) => {
    const colors = {
        new: 'bg-success',
        processing: 'bg-primary',
        complete: 'bg-warning',
    };

    return (
        <span
            className={`badge text-white ${colors[status]} ${className || ''}`}
            style={{ borderRadius: '0.75rem' }} // bo góc cho badge
        >
            {children}
        </span>
    );
};


const ProgressBar = ({ value, color = 'bg-warning', className }) => {
    return (
        <div className={`progress ${className || ''}`}>
            <div
                className={`progress-bar ${color}`}
                role="progressbar"
                style={{ width: `${Math.min(value, 100)}%` }}
                aria-valuenow={Math.min(value, 100)}
                aria-valuemin="0"
                aria-valuemax="100"
            />
        </div>
    );
};

// Nhóm tab (Ngày/Tuần/Tháng) hoặc (Tuần/Tháng)
const TabGroup = ({ tabs, activeTab, onTabChange }) => {
    return (
        <div className="btn-group">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`btn btn-sm btn-outline-secondary ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => onTabChange(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

// Thẻ thống kê nhỏ (Doanh thu, Đơn hàng, vv.)
const StatCard = ({ title, value, trend, trendValue }) => {
    return (
        <div className="card p-4 rounded-3">
            <h3 className="h6 mb-1">{title}</h3>
            <div className="d-flex align-items-baseline justify-content-between">
                <p className="h5 mb-0">{value}</p>

                {trend && trendValue && (
                    <span
                        className={`small fw-semibold ${trend === 'up' ? 'text-success' : 'text-danger'
                            }`}
                    >
                        {trend === 'up' ? '+' : ''}
                        {trendValue}
                    </span>
                )}

            </div>
            <hr className="my-2" />
        </div>
    );
};



// Thẻ thiết bị/nguyên liệu
const DeviceStatusCard = ({ name, status, details, progress }) => {
    return (
        <div className="card p-3 mb-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h3 className="h6 mb-0">{name}</h3>
                <StatusTag status={status}>
                    {status === 'new'
                        ? 'Mới'
                        : status === 'processing'
                            ? 'Đang xử lý'
                            : 'Hoàn thành'}
                </StatusTag>
            </div>
            <ul className="list-unstyled mb-2">
                {details.map((detail, index) => (
                    <li key={index} className="small text-muted">{detail}</li>
                ))}
            </ul>
            <ProgressBar value={progress} />
        </div>
    );
};




const Dashboard = () => {
    const [overviewTab, setOverviewTab] = useState('Ngày');
    const [revenueTab, setRevenueTab] = useState('Tuần');
    const [distributionTab, setDistributionTab] = useState('Tháng');

    const branches = [
        {
            name: "Chi nhánh Quận 1",
            peakTime: "11:30 - 13:30",
            avgServiceTime: 12,
            revenue: "45.2M",
            revenueChange: "+12.5%",
            orders: 420,
            ordersChange: "+8.2%",
            rating: "98%",
            ratingChange: "+2.1%",
            staff: 12,
            bestSeller: "Cơm tấm sườn bì chả",
            status: "Hoạt động tốt",
            statusClass: "success"
        },
        {
            name: "Chi nhánh Quận 3",
            peakTime: "12:00 - 14:00",
            avgServiceTime: 15,
            revenue: "38.7M",
            revenueChange: "+5.5%",
            orders: 385,
            ordersChange: "+4.2%",
            rating: "92%",
            ratingChange: "-1.1%",
            staff: 10,
            bestSeller: "Cơm tấm sườn nướng",
            status: "Cần chú ý",
            statusClass: "warning"
        },
        {
            name: "Chi nhánh Quận 7",
            peakTime: "11:00 - 13:00",
            avgServiceTime: 13,
            revenue: "41.9M",
            revenueChange: "+9.5%",
            orders: 402,
            ordersChange: "+6.2%",
            rating: "95%",
            ratingChange: "+3.5%",
            staff: 11,
            bestSeller: "Cơm tấm đặc biệt",
            status: "Hoạt động tốt",
            statusClass: "success"
        }
    ];

    const revenue = [
        {
            title: "Doanh Thu",
            value: "162,590,000 đ",
            trend: "up",
            trendValue: "6.5%"
        },
        {
            title: "Đơn Hàng",
            value: "1,247",
            trend: "up",
            trendValue: "8.2%"
        },
        {
            title: "Giá Trị TB Đơn",
            value: "89,000 đ",
            trend: "down",
            trendValue: "-1.5%"
        },
        {
            title: "Lượng Khách",
            value: "2,150",
            trend: "up",
            trendValue: "3.7%"
        }
    ]




    return (
        <div
            className="container-fluid py-4 mt-5"
            style={{ minHeight: '100vh' }}
        >
            <header className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="h3 fw-bold">Dashboard</h1>
                    <p className="small text-muted mb-0">Welcome... Guest</p>
                </div>
                <button className="btn btn-outline-dark d-flex align-items-center gap-2">
                    <Filter size={16} />
                    <span>Filter - Export to PDF/Excel</span>
                </button>
            </header>

            <section className="mb-4 tongquan">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="h5 fw-bold mb-0">Tổng Quan Hiệu Suất</h2>
                    <TabGroup
                        tabs={['Ngày', 'Tuần', 'Tháng']}
                        activeTab={overviewTab}
                        onTabChange={setOverviewTab}
                    />
                </div>

                <div className="row row-cols-1 row-cols-md-4 g-3">

                    {
                        revenue.map((item, index) => (
                            <div className="col" key={index}>
                                <StatCard
                                    title={item.title}
                                    value={item.value}
                                    trend={item.trend}
                                    trendValue={item.trendValue}
                                />
                            </div>
                        ))
                    }

                </div>
            </section>

            <div className="row g-4 gap-2 ">
                <div className="col-md-5 ml-3 revenue">
                    <section className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h2 className="h5 fw-bold mb-0">Doanh Thu Theo Thời Gian</h2>
                            <div className="d-flex align-items-center gap-2">
                                <div className="d-flex align-items-center gap-1">
                                    <span
                                        className="d-inline-block rounded-circle"
                                        style={{ width: '10px', height: '10px', backgroundColor: '#FFC107' }}
                                    ></span>
                                    <span className="small">HÔM NAY</span>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <span
                                        className="d-inline-block rounded-circle"
                                        style={{ width: '10px', height: '10px', backgroundColor: '#28a745' }}
                                    ></span>
                                    <span className="small">KỲ TRƯỚC</span>
                                </div>
                                <TabGroup
                                    tabs={['Tuần', 'Tháng']}
                                    activeTab={revenueTab}
                                    onTabChange={setRevenueTab}
                                />
                            </div>
                        </div>

                        <div
                            className="card bg-white mb-4 d-flex align-items-center justify-content-center"
                            style={{ height: '200px' }}
                        >
                            <p className="text-muted">[Chart Area - Revenue over time]</p>
                        </div>

                        <div className="row row-cols-3 g-3">
                            <div className="col">
                                <StatCard title="Tăng trưởng" value="+8.5%" />
                            </div>
                            <div className="col">
                                <StatCard title="Cao nhất" value="85M" />
                            </div>
                            <div className="col">
                                <StatCard title="Thấp nhất" value="42.3M" />
                            </div>
                        </div>
                    </section>
                </div>

                <div className="col-md-6 distribution">
                    <section className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h2 className="h5 fw-bold mb-0">Phân Bố Đơn Hàng</h2>
                            <div className="d-flex align-items-center gap-2">
                                <div className="d-flex align-items-center gap-1">
                                    <span
                                        className="d-inline-block rounded-circle"
                                        style={{ width: '10px', height: '10px', backgroundColor: '#FFC107' }}
                                    ></span>
                                    <span className="small">HÔM NAY</span>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <span
                                        className="d-inline-block rounded-circle"
                                        style={{ width: '10px', height: '10px', backgroundColor: '#28a745' }}
                                    ></span>
                                    <span className="small">KỲ TRƯỚC</span>
                                </div>
                                <TabGroup
                                    tabs={['Tuần', 'Tháng']}
                                    activeTab={distributionTab}
                                    onTabChange={setDistributionTab}
                                />
                            </div>
                        </div>

                        <div
                            className="card bg-white mb-4 d-flex align-items-center justify-content-center"
                            style={{ height: '200px' }}
                        >
                            <p className="text-muted">[Chart Area - Order distribution]</p>
                        </div>

                        <div className="row row-cols-4 g-3">
                            <div className="col">
                                <StatCard title="Tăng bình" value="3.8%" />
                            </div>
                            <div className="col">
                                <StatCard title="Lớn trượng đ" value="17%" />
                            </div>
                            <div className="col">
                                <StatCard title="Bây giá chỉ" value="32%" />
                            </div>
                            <div className="col">
                                <StatCard title="Mọa trưởng đ" value="59%" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <section className="mb-4 mt-5">
                <div className="card p-4 branchPerformance">
                    <LocationStatCard
                        branches={branches}
                    />
                </div>
            </section>

            {/* Nguyên Liệu & Thiết Bị */}
            <div className="row g-4">
                <div className="col-md-6">
                    <section>
                        <h2 className="h5 fw-bold mb-4">Nguyên Liệu & Thiết Bị</h2>
                        <div>
                            <h3 className="h6 mb-2">Nguyên Liệu</h3>
                            <DeviceStatusCard
                                name="Cơm"
                                status="new"
                                details={["Tồn kho: 25 kg", "Cần mua: 2 ngày nữa"]}
                                progress={85}
                            />
                            <DeviceStatusCard
                                name="Nước Mắm"
                                status="processing"
                                details={["Tồn kho: 2.5 L", "Cần mua: 7 ngày nữa"]}
                                progress={70}
                            />
                            <DeviceStatusCard
                                name="Rau Cải"
                                status="complete"
                                details={["Tồn kho: 5 kg", "Cần mua: 1 ngày nữa"]}
                                progress={35}
                            />

                            <h3 className="h6 mt-4 mb-2">Thiết Bị</h3>
                            <DeviceStatusCard
                                name="Máy Hương 1"
                                status="new"
                                details={["Bảo trì gần nhất: 31/03/2024", "Bảo trì tiếp theo: 30/06/2024"]}
                                progress={95}
                            />
                            <DeviceStatusCard
                                name="Máy Hương 2"
                                status="new"
                                details={["Bảo trì gần nhất: 31/03/2024", "Bảo trì tiếp theo: 30/06/2024"]}
                                progress={85}
                            />
                            <DeviceStatusCard
                                name="Tủ Lạnh"
                                status="new"
                                details={["Bảo trì gần nhất: 01/02/2024", "Bảo trì tiếp theo: 01/06/2024"]}
                                progress={60}
                            />
                            <DeviceStatusCard
                                name="Bếp Gas"
                                status="complete"
                                details={["Bảo trì gần nhất: 01/02/2024", "Bảo trì tiếp theo: 30/06/2024"]}
                                progress={35}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div >
    );
};


LocationStatCard.propTypes = {
    branches: Props.array
}
BranchCard.propTypes = {
    branch: Props.object
}
StatusTag.propTypes = {
    status: Props.string,
    children: Props.node,
    className: Props.string
}
ProgressBar.propTypes = {
    value: Props.number,
    color: Props.string,
    className: Props.string
}
TabGroup.propTypes = {
    tabs: Props.array,
    activeTab: Props.string,
    onTabChange: Props.func
}
StatCard.propTypes = {
    title: Props.string,
    value: Props.string,
    trend: Props.string,
    trendValue: Props.string
}
DeviceStatusCard.propTypes = {
    name: Props.string,
    status: Props.string,
    details: Props.array,
    progress: Props.number
}






export default Dashboard;