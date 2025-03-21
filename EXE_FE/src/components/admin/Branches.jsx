import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BranchInfo from "./BranchInfo";
import DocumentCard from "./DocumentCard";
import RequestTable from "./RequestTable";
import ListBranch from "./ListBranch";
import { BASE_URL } from "../../config/api";
// import useScanDetection from "use-scan-detection";

function Branches() {
    const [activeMenu, setActiveMenu] = useState('thongtin');
    const [order, setOrder] = useState([]);
    const [branches, setBranches] = useState([]);
    const [branchId, setBranchId] = useState(1);
    const [refresh, setRefresh] = useState(true);
    const [orderDelivering, setOrderDelivering] = useState([]);


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



    useEffect(() => {
        const interval = setInterval(() => {
            fetchOrder();
        }, 5000);
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        fetchBranch();
        fetchOrderDelivering();
    }, []);

    const fetchOrder = async () => {
        try {
            const response = await fetch(`${BASE_URL}/orders/branch/${branchId}?page=0&size=10&statusId=5`);
            const data = await response.json();
            setOrder(data.data.content);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchOrderDelivering = async () => {
        try {
            const response = await fetch(`${BASE_URL}/orders/branch/${branchId}?page=0&size=10&statusId=2`);
            const data = await response.json();
            setOrderDelivering(data.data.content);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            fetchOrderDelivering();
        }, 5000);

        return () => clearInterval(interval);
    }, []);




    const fetchBranch = async () => {
        const defaultLocation = "146 Nguyễn Thị Kiểu, Hiệp Thành, Quận 12, Hồ Chí Minh, Việt Nam"
        try {
            const response = await fetch(`${BASE_URL}/branches/distance?destination=${defaultLocation}`);
            const data = await response.json();
            setBranches(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const [barcodeBuffer, setBarcodeBuffer] = useState('');
    const [barcode, setBarcode] = useState('');
    let timeoutId;

    const handleKeyPress = async (e) => {
        const newBuffer = barcodeBuffer + e.key;
        setBarcodeBuffer(newBuffer);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(async () => {
            const barcodeNumber = parseInt(newBuffer);
            setBarcode(barcodeNumber);
            setBarcodeBuffer('');
        }, 100);


        if (parseInt(newBuffer)) {
            try {
                const response = await fetch(`${BASE_URL}/orders/delivery/${parseInt(newBuffer)}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                const data = await response.json();
                console.log("Barcode scanned:", newBuffer);
                console.log("Response:", data);
                fetchOrderDelivering();
            } catch (error) {
                console.error("Error processing barcode:", error);
            } finally {
                setBarcodeBuffer('');
                setBarcode('');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('keypress', handleKeyPress);
        return () => {
            window.removeEventListener('keypress', handleKeyPress);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [barcodeBuffer]);




    const renderContent = () => {
        switch (activeMenu) {
            case 'thongtin':
                return <BranchInfo
                    branchMembers={branchMembers}
                />;
            case 'document':
                return <DocumentCard contracts={contracts} />
            case 'solieu':
                return <RequestTable refresh={refresh} setRefresh={setRefresh} order={orderDelivering} />;
            case 'yeucau':
                return <RequestTable refresh={refresh} setRefresh={setRefresh} order={order} />;
            case 'branchList':
                return <ListBranch branches={branches} />;
            default:
                return null;
        }
    };

    return (
        <div className="mt-5">
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
                                    className={`nav-link ${activeMenu === 'solieu' ? 'active' : ''}`}
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveMenu('solieu')
                                    }}
                                >
                                    Đang Giao
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeMenu === 'yeucau' ? 'active' : ''}`}
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveMenu('yeucau')
                                    }}
                                >
                                    Đơn hàng
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
                                    className={`nav-link ${activeMenu === 'branchList' ? 'active' : ''}`}
                                    href="#!"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveMenu('branchList')
                                    }}
                                >
                                    Danh sách chi nhánh
                                </a>
                            </li>
                        </ul>
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
