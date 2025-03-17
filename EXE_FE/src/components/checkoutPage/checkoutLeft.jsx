import { Col } from "react-bootstrap"
import './checkout.css'
import PropTypes from 'prop-types'
import { useState, useEffect } from "react"
import {
    faCheck,
    faTruck,
    faShoppingCart,
    faSpinner,
    faCheckCircle,
    faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CheckoutLeft = ({ setUserName, userAddress, setUserAddress, setPhoneNumber, IsPickup, setPaymentMethodId }) => {
    const [isBuyFor, setIsBuyFor] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [nameBuyFor, setNameBuyFor] = useState('')
    const [phoneBuyFor, setPhoneBuyFor] = useState('')
    const [address, setAddress] = useState('')
    const [isNewAddress, setIsNewAddress] = useState('default');
    const [isPickup, setIsPickup] = useState(false)
    const [isCod, setIsCod] = useState(true)

    useEffect(() => {
        setPaymentMethodId(1);
    }, [setPaymentMethodId]);

    return (
        <>
            <Col md={5} style={{ fontFamily: 'Playfair Display, serif' }}>
                <div className="mb-3 d-flex justify-content-around">
                    <h5 style={{ fontWeight: '700' }}>Hình thức</h5>
                    <div className="form-check form-check-inline ">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="deliveryType"
                            id="radioGiaoHang"
                            checked={!isPickup}
                            onChange={() => {
                                setIsPickup(!isPickup);
                                IsPickup(!isPickup);
                            }}
                            style={{ width: 20, height: 20, backgroundColor: 'rgb(235, 209, 135)' }}
                        />
                        <label className="form-check-label " htmlFor="radioGiaoHang">
                            Giao hàng
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="deliveryType"
                            id="radioDenTaiQuan"
                            checked={isPickup}
                            onChange={() => {
                                setIsPickup(true);
                                IsPickup(true);
                            }}
                            style={{ width: 20, height: 20, backgroundColor: 'rgb(235, 209, 135)' }}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="radioDenTaiQuan"
                        >
                            Lấy tại quán
                        </label>
                    </div>
                </div>

                {
                    !isPickup && (
                        <>
                            <div className="mb-3">
                                <h5 className='pt-2 mr-4 mb-4'>Thông tin giao hàng</h5>

                                <select
                                    className="form-control mb-2 bg-transparent border-1 border-dark"
                                    style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.7rem center', backgroundSize: '1em' }}
                                    value={isNewAddress}
                                    onChange={(e) => setIsNewAddress(e.target.value)}
                                >
                                    {/* userAddress */}
                                    <option value="default" >Địa chỉ mặc định</option>
                                    <option value="new">Tạo địa chỉ mới</option>
                                </select>

                                <div>
                                    {userAddress && isNewAddress === 'default' && (
                                        <div className="d-flex align-items-center mb-4">
                                            <FontAwesomeIcon icon={faLocationDot} className="me-2" size="lg" />
                                            <p className="mb-0">{userAddress}</p>
                                        </div>
                                    )}
                                </div>
                                {
                                    isNewAddress === 'new' && (
                                        <>
                                            <input
                                                type="text"
                                                className="form-control mb-2"
                                                placeholder="Tên khách hàng"
                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                    setUserName(e.target.value);
                                                }}
                                                style={{ backgroundColor: 'transparent', border: '1px solid black', color: 'black' }}
                                            />
                                            <input
                                                type="text"
                                                className="form-control mb-2"
                                                placeholder="Địa chỉ giao hàng"
                                                value={address}
                                                onChange={(e) => {
                                                    setAddress(e.target.value);
                                                    setUserAddress(e.target.value);
                                                }}
                                                style={{ backgroundColor: 'transparent', border: '1px solid black', color: 'black' }}
                                            />
                                            <input
                                                type="text"
                                                className="form-control mb-2"
                                                placeholder="Số điện thoại"
                                                value={phone}
                                                onChange={(e) => {
                                                    setPhone(e.target.value);
                                                    setPhoneNumber(e.target.value);
                                                }}
                                                style={{ backgroundColor: 'transparent', border: '1px solid black', color: 'black' }}
                                            />
                                        </>
                                    )
                                }

                            </div>

                            <div className="mb-3">
                                <div className='d-flex justify-content-start  mb-3 '>
                                    <div className="form-check-inline m-0 pt-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="isBuyFor"
                                            id="checkboxBuyFor"
                                            checked={isBuyFor}
                                            onChange={() => setIsBuyFor(!isBuyFor)}
                                            style={{ width: 20, height: 20, padding: 0, backgroundColor: 'rgb(235, 209, 135)' }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="checkboxBuyFor"
                                        >
                                            Đặt Hộ
                                        </label>
                                    </div>
                                </div>

                                {
                                    isBuyFor && (
                                        <>
                                            <input
                                                type="text"
                                                className="form-control mb-2 info-input"
                                                placeholder="Tên người nhận"
                                                disabled={!isBuyFor}
                                                value={name}
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                    setUserName(e.target.value);
                                                }}
                                            />
                                            <input
                                                type="text"
                                                className="form-control mb-2 info-input"
                                                placeholder="Số điện thoại người nhận"
                                                disabled={!isBuyFor}
                                                value={phone}
                                                onChange={(e) => {
                                                    setPhone(e.target.value);
                                                    setPhoneNumber(e.target.value);
                                                }}
                                            />

                                            <input
                                                type="text"
                                                className="form-control mb-2"
                                                placeholder="Địa chỉ chi tiết"
                                            />
                                        </>
                                    )
                                }

                                {/* <div className="form-check form-check-inline mt-2 mb-3 ">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="deliveryTime"
                                        id="radioGiaoNgay"
                                        defaultChecked
                                        style={{ width: 25, height: 25, backgroundColor: 'rgb(235, 209, 135)' }}
                                    />
                                    <label className="form-check-label ml-2 " style={{ fontSize: '15px' }} htmlFor="radioGiaoNgay">
                                        Giao ngay
                                    </label>
                                </div> */}


                                {/* <div className="d-flex form-check form-check-inline mb-3">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="deliveryTime"
                                        id="radioHenGio"
                                        style={{ width: 25, height: 25, backgroundColor: 'rgb(235, 209, 135)' }}
                                    />

                                    <label
                                        className='ml-2 pt-1'
                                        style={{
                                            fontSize: '15px',
                                            width: '100%',
                                            backgroundColor: 'transparent',
                                        }}
                                        htmlFor="radioHenGio"
                                    >
                                        Hẹn lịch giao lúc
                                        <input
                                            type="time"
                                            style={{
                                                width: '80px',
                                                margin: '0 5px',
                                            }}
                                        />
                                        Ngày {new Date().getDate()}/{new Date().getMonth() + 1}
                                    </label>
                                </div> */}
                            </div>

                        </>
                    )
                }

                <div className="mb-3 mt-5 PaymentMethod">
                    <h5>Phương thức thanh toán</h5>
                    <div className="form-check">
                        <input
                            style={{ width: 25, height: 25, backgroundColor: 'rgb(235, 209, 135)' }}
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="payQRVNPay"
                            checked={!isCod}
                            onChange={() => {
                                setPaymentMethodId(2);
                                setIsCod(false);
                            }}
                        />
                        <label className="form-check-label ml-3" htmlFor="payQRVNPay">
                            Quét mã QR VNPay
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            style={{ width: 25, height: 25, backgroundColor: 'rgb(235, 209, 135)' }}
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="payCOD"
                            checked={isCod}
                            onChange={() => {
                                setPaymentMethodId(1);
                                setIsCod(true);
                            }}
                        />
                        <label className="form-check-label ml-3" htmlFor="payCOD">
                            Tiền mặt (COD)
                        </label>
                    </div>
                </div>
            </Col >
        </>
    )
}

CheckoutLeft.propTypes = {
    setUserName: PropTypes.func.isRequired,
    userAddress: PropTypes.string.isRequired,
    setUserAddress: PropTypes.func.isRequired,
    setPhoneNumber: PropTypes.func.isRequired,
    IsPickup: PropTypes.func.isRequired,
    setPaymentMethodId: PropTypes.func.isRequired
}

export default CheckoutLeft