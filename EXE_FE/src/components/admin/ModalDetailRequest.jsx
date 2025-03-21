import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PrintIcon from '@mui/icons-material/Print';

const ModalDetailRequest = ({ show, onHide, order }) => {
    const formatDateTime = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return new Date(date).toLocaleString('vi-VN', options);
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            backdrop="static"
            keyboard={false}
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>Chi tiết đơn hàng #{order?.id}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="mb-3">Thông tin đơn hàng</h5>
                            <p><strong>Mã đơn:</strong> #{order?.id}</p>
                            <p><strong>Ngày tạo:</strong> {formatDateTime(order?.createdAt)}</p>
                            <p><strong>Trạng thái:</strong> {order?.orderStatus}</p>
                            <p><strong>Địa chỉ:</strong> {order?.address}</p>
                            <p><strong>Số điện thoại:</strong> {order?.phone}</p>
                            <p><strong>Ghi chú:</strong> {order?.note || 'Không có'}</p>
                        </div>
                        <div className="col-md-6">
                            <h5 className="mb-3">Chi tiết thanh toán</h5>
                            <p><strong>Tạm tính:</strong> {order?.subTotal?.toLocaleString()}đ</p>
                            <p><strong>Phí vận chuyển:</strong> {order?.shippingFee?.toLocaleString()}đ</p>
                            <p><strong>Giảm giá:</strong> {order?.discountValue?.toLocaleString()}đ ({order?.discountPercent}%)</p>
                            <p><strong>Điểm sử dụng:</strong> {order?.pointUsed} điểm</p>
                            <p><strong>Điểm tích lũy:</strong> {order?.pointEarned} điểm</p>
                            <p><strong>Tổng cộng:</strong> {order?.amount?.toLocaleString()}đ</p>
                            <p><strong>Phương thức thanh toán:</strong> {order?.payment_code}</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h5 className="mb-3">Sản phẩm đã đặt</h5>
                        <div className="table-responsive">
                            <table className="table bg-transparent">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Đơn giá</th>
                                        <th>Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {order?.orderItems?.map((item, index) => (
                                        <tr key={index} className>
                                            <td><img src={item.productImg} alt="..."
                                                style={{ width: '50px', height: '50px' }}
                                            /></td>
                                            <td>{item.productName}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.price?.toLocaleString()}đ</td>
                                            <td>{(item.price * item.quantity)?.toLocaleString()}đ</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

ModalDetailRequest.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    order: PropTypes.object,
    setRefresh: PropTypes.func,
    refresh: PropTypes.bool,
};

export default ModalDetailRequest;
