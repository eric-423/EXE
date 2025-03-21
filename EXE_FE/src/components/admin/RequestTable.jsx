import { PropTypes } from 'prop-types';
import PrintIcon from '@mui/icons-material/Print';
import ModalDetailRequest from './ModalDetailRequest';
import { useState } from 'react';
import { BASE_URL } from '../../config/api';

const RequestTable = ({ order, refresh, setRefresh }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleShowModal = (orderData) => {
        setSelectedOrder(orderData);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedOrder(null);
    };


    const handlePrintPDF = async (pdfUrl) => {
        try {
            const response = await fetch(pdfUrl);
            const blob = await response.blob();
            const pdfObjectUrl = URL.createObjectURL(blob);

            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const windowWidth = 900;
            const windowHeight = 600;
            const left = (screenWidth - windowWidth) / 2;
            const top = (screenHeight - windowHeight) / 2;
            const printWindow = window.open(pdfObjectUrl, '_blank', `width=${windowWidth},height=${windowHeight},left=${left},top=${top}`);

            if (printWindow) {
                printWindow.addEventListener('load', function () {
                    try {
                        printWindow.focus();
                        printWindow.print();
                    } catch (err) {
                        console.error("Lỗi khi in:", err);
                        printWindow.close();
                    }
                });
            }
        } catch (error) {
            console.error("Lỗi khi tải PDF:", error);
        } finally {
            setRefresh(!refresh);
        }
    };

    const handleFetchOrderToPrint = async (id, event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/orders/inprocess/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            handlePrintPDF(data.data.invoice_url);
        } catch (error) {
            console.error("Lỗi khi tải đơn hàng:", error);
        }
    }

    return (
        <>
            <div className="container my-4">
                <div className="row g-4">
                    {order.map((order) => (
                        <div className="col-md-6 col-lg-4" key={order.id}

                            style={{ cursor: 'pointer' }}
                        >
                            <div
                                className="position-relative h-100 "
                                style={{
                                    backgroundColor: "#FEEFC9",
                                    borderRadius: "8px",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                    padding: "1.5rem",
                                    paddingTop: "0.7rem",
                                }}
                            >
                                <button className='position-absolute top-3 end-0 border-0 bg-transparent' onClick={(e) => handleFetchOrderToPrint(order.id, e)}>
                                    <PrintIcon style={{ width: "2.5rem", height: "2.5rem", marginRight: 20 }} />
                                </button>
                                <div
                                    onClick={() => handleShowModal(order)}
                                >
                                    <h6 className="fw-bold mt-2">{order.address}</h6>
                                    <p className="mb-1">{order.createdAt}</p>
                                    <p className="mb-1">{order.orderStatus}</p>
                                    <p className="mb-1">{order.status}</p>
                                    <p className="mb-3">{order.staff}</p>
                                </div>


                                <button className="btn btn-dark"
                                    onClick={() => handleShowModal(order)}
                                >Chi tiết</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ModalDetailRequest
                show={showModal}
                onHide={handleCloseModal}
                order={selectedOrder}
            />
        </>
    )
};

RequestTable.propTypes = {
    order: PropTypes.array,
    refresh: PropTypes.bool,
    setRefresh: PropTypes.func,
};

export default RequestTable