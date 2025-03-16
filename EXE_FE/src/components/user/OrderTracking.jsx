import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faCheck,
    faTruck,
    faShoppingCart,
    faSpinner,
    faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

import { PropTypes } from 'prop-types';


const getProgressPercentage = (status) => {
    switch (status) {
        case 'Đặt hàng thành công':
            return 10; // 1/5
        case 'Đang chuẩn bị':
            return 30; // 2/5
        case 'Đang vận chuyển':
            return 50; // 3/5
        case 'Đã giao':
            return 70; // 4/5
        case 'Đã hủy':
            return 100; // 5/5
        default:
            return 0;
    }
};

const OrderTracking = ({ orderData }) => {

    const progressPercentage = getProgressPercentage(orderData.orderStatus);

    return (
        <div className="member-card p-4 w-100">
            <div className="order-tracking-container">
                <h2 className="order-title">Tra cứu đơn hàng</h2>

                <div className="order-info row">
                    <div className="col-md-6">
                        <div className="order-info-item">Mã đơn hàng: <strong>{orderData.orderId}</strong></div>
                        <div className="order-info-item">Thời gian đặt hàng: <strong>{orderData.orderTime}</strong></div>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <div className="order-info-item">Hình thức: <strong>{orderData.orderType}</strong></div>
                        <div className="order-info-item">Chủ hàng: <strong>{orderData.branch}</strong></div>
                    </div>
                </div>

                <div className="progress-container">
                    <div className="progress" style={{ height: '6px' }}>
                        <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: `${progressPercentage}%` }}
                            aria-valuenow={progressPercentage}
                            aria-valuemin={0}
                            aria-valuemax={100}>
                        </div>
                    </div>

                    <div className="progress-steps">
                        {[
                            { label: 'Đặt hàng thành công', icon: faCheck, status: 'Đặt hàng thành công' },
                            { label: 'Đang chuẩn bị', icon: orderData.orderStatus === 'Đang chuẩn bị' ? faCheck : faSpinner, status: 'Đang chuẩn bị' },
                            { label: 'Đang vận chuyển', icon: orderData.orderStatus === 'Đang giao hàng' ? faCheck : faTruck, status: 'Đang vận chuyển' },
                            { label: 'Đã giao', icon: orderData.orderStatus === 'Đã giao' ? faCheck : faCheckCircle, status: 'Đã giao' },
                            { label: 'Đã hủy', icon: orderData.orderStatus === 'Đã hủy' ? faCheck : faShoppingCart, status: 'Đã hủy' }
                        ].map((step, index) => (
                            <div className={`progress-step ${orderData.orderStatus === step.status ? 'active' : ''}`} key={index}>
                                <div className="step-icon">
                                    <FontAwesomeIcon icon={step.icon} />
                                </div>
                                <div className="step-label">{step.label}</div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className='d-flex justify-content-start gap-2  align-items-center mt-3 pl-5 pr-5'>
                    <strong>
                        Tình trạng đơn hàng:
                    </strong>
                    <div className="order-status preparing"> {orderData.orderStatus}</div>
                </div>

                <div className="section-title">Thông tin giao hàng</div>
                <div className="row">
                    <div className="col-md-6">
                        <div>Tên khách hàng: <strong>{orderData.userName}</strong></div>
                        <div>Địa chỉ giao hàng: <strong>{orderData.address}</strong></div>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <div>Số điện thoại: <strong>{orderData.phoneNumber}</strong></div>
                    </div>
                </div>

                <div className="section-title">Thông tin đơn hàng</div>

                <div className="order-items">
                    {orderData.products.map((product, index) => (
                        <div className="item-row" key={index}>
                            <div>
                                <div className="item-name mt-2">{product.productName}</div>

                                {product.subProductName && (
                                    <div className="item-description mt-1">{product.subProductName}</div>
                                )}

                            </div>

                            <div className="item-price">{(product.price * product.quantity).toLocaleString()}đ x {product.quantity}</div>
                        </div>
                    ))}
                </div>

                <div className="action-buttons">
                    <button className="btn btn-cancel" style={{ width: '48%' }}>Hủy đơn</button>
                    <button className="btn btn-continue" style={{ width: '48%' }}>Tiếp tục đặt hàng</button>
                </div>
            </div>
        </div>
    )
}

OrderTracking.propTypes = {
    orderData: PropTypes.object.isRequired
};

export default OrderTracking;
