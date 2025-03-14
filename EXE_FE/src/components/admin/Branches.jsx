import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Filter } from "lucide-react";
import BranchInfo from "./BranchInfo";
import DocumentCard from "./DocumentCard";
import RequestTable from "./RequestTable";

function Branches() {
    const [activeMenu, setActiveMenu] = useState('thongtin');

    const shipTrackingToday = [
        {
            name: "NCCCCCC",
            time: "10:00",
            quantity: 12,
            status: "Đang giao",
            lastDelivery: "10:30",
            quality: "Đạt",
        },
        {
            name: "NCC Giao 1",
            time: "13:00",
            quantity: 30,
            status: "Đang xử lý",
            lastDelivery: "14:00",
            quality: "Đéo",
        },
        {
            name: "NCC Giao 2",
            time: "14:30",
            quantity: 37,
            status: "Đang xử lý",
            lastDelivery: "15:00",
            quality: "Đêó",
        },
    ];

    const shipTrackingNextDay = [
        {
            name: "NCCCCCC",
            time: "10:00",
            quantity: 12,
            status: "Mai tính",
            lastDelivery: "10:30",
            quality: "Đạt",
        },
        {
            name: "NCCCCCCC",
            time: "13:00",
            quantity: 30,
            status: "Mai tính",
            lastDelivery: "14:00",
            quality: "Đéo",
        },
        {
            name: "NCCCCCCC",
            time: "14:30",
            quantity: 37,
            status: "Mai tính",
            lastDelivery: "15:00",
            quality: "Đêó",
        },
    ];

    const branchMembers = [
        {
            id: 1,
            name: "Trương Quang Hiếu Trung",
            phoneNumber: "0909 090 090",
            email: "trungtruong123@gmail.com",
            createdAt: "01/01/2021",
            status: "Active",
        },
        {
            id: 1,
            name: "Nguyên Gia Bảo Anh",
            phoneNumber: "0909 090 090",
            email: "baoanh123@gmail.com",
            createdAt: "01/01/2021",
            status: "Active",
        },
    ]
    const contracts = [
        {
            id: 1,
            title: "Hợp đồng 1",
            type: "Hợp đồng 1",
            description: "Đang hoạt đ"
        },
        {
            id: 2,
            title: "Hợp đồng 2",
            type: "Hợp đồng 2",
            description: "Đang hoạt đ"
        },
        {
            id: 3,
            title: "Hợp đồng 3",
            type: "Hợp đồng 3",
            description: "Đang hoạt đ"
        },
        {
            id: 4,
            title: "Hợp đồng 4",
            type: "Hợp đồng 4",
            description: "Đang hoạt đ"
        },
        {
            id: 5,
            title: "Hợp đồng 4",
            type: "Hợp đồng 4",
            description: "Đang hoạt đ"
        },
    ]

    const requests = [
        {
            id: 1,
            title: "Yêu cầu thay đổi giờ làm việc tại chi nhánh Quận 1",
            sender: "Người gửi: Nguyễn Văn A - Chi nhánh Quận 1",
            date: "Ngày gửi: 02/12/2023, 08:00 AM",
            status: "Trạng thái: Đang chờ xử lý",
            staff: "Nhân sự: -",
            badge: "Đang thảo luận",
        },
        {
            id: 2,
            title: "Yêu cầu thay đổi giờ làm việc tại chi nhánh Quận 1",
            sender: "Người gửi: Nguyễn Văn B - Chi nhánh Quận 1",
            date: "Ngày gửi: 02/12/2023, 09:15 AM",
            status: "Trạng thái: Đang chờ xử lý",
            staff: "Nhân sự: -",
            badge: "Đang thảo luận",
        },
        {
            id: 3,
            title: "Yêu cầu thay đổi giờ làm việc tại chi nhánh Quận 1",
            sender: "Người gửi: Nguyễn Văn C - Chi nhánh Quận 1",
            date: "Ngày gửi: 02/12/2023, 10:00 AM",
            status: "Trạng thái: Đang chờ xử lý",
            staff: "Nhân sự: -",
            badge: "Đang thảo luận",
        },
        {
            id: 4,
            title: "Yêu cầu thay đổi giờ làm việc tại chi nhánh Quận 1",
            sender: "Người gửi: Nguyễn Thị D - Chi nhánh Quận 1",
            date: "Ngày gửi: 02/12/2023, 10:30 AM",
            status: "Trạng thái: Đang chờ xử lý",
            staff: "Nhân sự: -",
            badge: "Đang thảo luận",
        },
        {
            id: 5,
            title: "Yêu cầu thay đổi giờ làm việc tại chi nhánh Quận 1",
            sender: "Người gửi: Trần Văn E - Chi nhánh Quận 1",
            date: "Ngày gửi: 02/12/2023, 11:00 AM",
            status: "Trạng thái: Đang chờ xử lý",
            staff: "Nhân sự: -",
            badge: "Đang thảo luận",
        },
        {
            id: 6,
            title: "Yêu cầu thay đổi giờ làm việc tại chi nhánh Quận 1",
            sender: "Người gửi: Lê Thị F - Chi nhánh Quận 1",
            date: "Ngày gửi: 02/12/2023, 11:30 AM",
            status: "Trạng thái: Đang chờ xử lý",
            staff: "Nhân sự: -",
            badge: "Đang thảo luận",
        },
    ];


    const renderContent = () => {
        switch (activeMenu) {
            case 'thongtin':
                return <BranchInfo
                    shipTrackingToday={shipTrackingToday}
                    shipTrackingNextDay={shipTrackingNextDay}
                    branchMembers={branchMembers}
                />;
            case 'document':
                return <DocumentCard contracts={contracts} />
            case 'solieu':
                return <div>solieu</div>;
            case 'yeucau':
                return <RequestTable requests={requests} />;
            default:
                return null;
        }
    };
    console.log(activeMenu);


    return (
        <div className="mt-5">
            {/* Top Navigation Bar */}
            <nav className="navbar-expand-lg ">
                <div className="container">
                    <a className="navbar-brand fw-bold mb-2" href="#!" style={{ fontSize: 20 }} >
                        Tấm tắc HAHA
                    </a>

                    <div className=" branchInfo collapse navbar-collapse" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeMenu === 'thongtin' ? 'active' : ''}`}
                                    aria-current="page"
                                    href=""
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveMenu('thongtin');
                                    }}
                                >
                                    Thông tin
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeMenu === 'lichtrinh' ? 'active' : ''}`}
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveMenu('document')
                                    }}
                                >
                                    Tài Liệu
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeMenu === 'solieu' ? 'active' : ''}`}
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveMenu('solieu')
                                    }}
                                >
                                    Số liệu
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeMenu === 'vanchuyen' ? 'active' : ''}`}
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveMenu('yeucau')
                                    }}
                                >
                                    Yêu Cầu
                                </a>
                            </li>
                        </ul>

                        <div className="d-flex">
                            <button className="btn btn-outline-dark d-flex align-items-center gap-2">
                                <Filter size={16} />
                                <span>Filter - Export to PDF/Excel</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                {renderContent()}
            </div>

        </div>
    );
}

export default Branches;
