import { Col } from "react-bootstrap"
import './checkout.css'
import { useState } from "react"
import PropTypes from 'prop-types'
import DropdownLocation from './../ui/dropdown/DropdownLocation';



const CheckoutLeft = ({ place, city }) => {
    const [isBuyFor, setIsBuyFor] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [nameBuyFor, setNameBuyFor] = useState('')
    const [phoneBuyFor, setPhoneBuyFor] = useState('')
    return (
        <  >
            <Col md={5} style={{ fontFamily: 'Playfair Display, serif' }}>
                <div className="mb-3 d-flex justify-content-around">
                    <h5 style={{ fontWeight: '700' }}>Hình thức</h5>
                    <div className="form-check form-check-inline ">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="deliveryType"
                            id="radioGiaoHang"
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
                            style={{ width: 20, height: 20, backgroundColor: 'rgb(235, 209, 135)' }}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="radioDenTaiQuan"
                        >
                            Đến tại quán
                        </label>
                    </div>
                </div>

                <div className="mb-3">
                    <div className='d-flex justify-content-between mb-3 '>
                        <h5 className='pt-2 '>Thông tin khách hàng</h5>
                        <button
                            className='w-25 rounded'
                            style={{ backgroundColor: 'transparent', border: '1px solid black', color: 'black', }}
                        >
                            Đăng nhập
                        </button>
                    </div>

                    <input
                        type="text"
                        className="form-control mb-2 "
                        placeholder="Tên khách hàng"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ backgroundColor: 'transparent', border: '1px solid black', color: 'black', }}
                    />
                    <input
                        type="text"
                        className="form-control mb-2 "
                        placeholder="Số điện thoại"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{ backgroundColor: 'transparent', border: '1px solid black', color: 'black', }}
                    />
                    <input
                        type="email"
                        className="form-control mb-2 "
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ backgroundColor: 'transparent', border: '1px solid black', color: 'black', }}

                    />
                </div>

                <div className="mb-3">

                    <div className='d-flex justify-content-space-between  mb-3 '>
                        <h5 className='pt-2 mr-4'>Thông tin giao hàng</h5>
                        <div className="form-check-inline ml-5 pt-2">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="isBuyFor"
                                id="checkboxBuyFor"
                                value={isBuyFor}
                                onClick={() => setIsBuyFor(!isBuyFor)}
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

                    <input
                        type="text"
                        className="form-control mb-2 info-input"
                        placeholder="Tên người nhận"
                        disabled={isBuyFor ? false : true}
                        value={isBuyFor ? nameBuyFor : name}
                        onChange={(e) => setNameBuyFor(e.target.value)}
                    // value={isBuyFor ?  : ''}
                    />
                    <input
                        type="text"
                        className="form-control mb-2 info-input"
                        placeholder="Số điện thoại người nhận"
                        disabled={isBuyFor ? false : true}
                        value={isBuyFor ? phoneBuyFor : phone}
                        onChange={(e) => setPhoneBuyFor(e.target.value)}
                    />

                    <div className='d-flex justify-content-between'>
                        <select className="form-control mb-2">
                            {
                                place.map((item, index) => {
                                    return (
                                        <option key={index} value={item.name}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                        <select className="form-control mb-2">
                            {
                                city.map((item, index) => {
                                    return (
                                        <option key={index} value={item.name}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    {/* <DropdownLocation /> */}

                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Địa chỉ chi tiết"
                    />


                    <div className="form-check form-check-inline mt-2 mb-3 ">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="deliveryType"
                            id="radioGiaoHang"
                            style={{ width: 25, height: 25, backgroundColor: 'rgb(235, 209, 135)' }}
                        />
                        <label className="form-check-label ml-2 " style={{ fontSize: '15px' }} htmlFor="radioGiaoHang">
                            Giao ngay
                        </label>
                    </div>


                    <div className="d-flex form-check form-check-inline mb-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="deliveryType"
                            id="radioGiaoHang"
                            style={{ width: 25, height: 25, backgroundColor: 'rgb(235, 209, 135)' }}
                        />

                        <label
                            className='ml-2 pt-1'
                            style={{
                                fontSize: '15px',
                                width: '100%',
                                backgroundColor: 'transparent',
                            }}
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
                    </div>
                </div>



                <div className="mb-3 mt-5 PaymentMethod">
                    <h5>Phương thức thanh toán</h5>
                    <div className="form-check">
                        <input
                            style={{ width: 25, height: 25, backgroundColor: 'rgb(235, 209, 135)' }}
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="payQRVNPay"
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
    place: PropTypes.array.isRequired,
    city: PropTypes.array.isRequired
}

export default CheckoutLeft