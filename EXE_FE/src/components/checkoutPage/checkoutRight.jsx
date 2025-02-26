import { Card, CardText, CardTitle, Col, Form } from 'react-bootstrap'
import { useEffect, useState } from 'react';

const CheckoutRight = () => {
    const [promoCode, setPromoCode] = useState('');
    const [note, setNote] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [discountValue, setDiscountValue] = useState(0);
    const [discountOnItem, setDiscountOnItem] = useState(0);
    const [shippingFee, setShippingFee] = useState(0);

    const handleApplyPromo = () => {
        console.log('Mã khuyến mãi:', promoCode);
        setDiscountValue(0)
    };

    const setTotalAmount = () => {
        let price = 0;
        combo.forEach(item => {
            price += parseInt(item.price) * parseInt(item.quantity);
        });
        setTotalPrice(price);
    };

    useEffect(() => {
        setTotalAmount();
    })

    const combo = [
        {
            name: "Cơm tấm sườn bì chả",
            price: "35.000đ",
            quantity: "1",
            additionalItems: [
                { name: "Chả" },
                { name: "Trứng" }
            ]
        },
        {
            name: "Cơm tấm sườn bì chả",
            price: "35.000đ",
            quantity: "1",
            additionalItems: [
                { name: "Chả" },
                { name: "Trứng" }
            ]
        },
        {
            name: "Canh chua cá",
            price: "20.000đ",
            quantity: "1",
        }
    ]

    return (
        <Col md={5} >
            <div className='comfirm-order rounded-4'>
                <div className='mb-4 '
                    style={{ backgroundColor: 'transparent', borderBottom: '1px solid black' }}
                >
                    <h5>Tấm tắc lành đại học </h5>
                    <p>Nhà văn hóa sinh viên đại học quốc gia tp.hcm, tp.hcm</p>
                </div>

                {
                    combo.map((item, index) => (
                        <div key={index} className="mb-3">
                            <div className="confirm-order-item">
                                <h6> {item.name}</h6>

                                <div className="d-flex justify-content-end gap-3">
                                    <p style={{ color: 'rgb(218, 115, 50)' }}>{item.price}</p>
                                    <p> x {item.quantity}</p>
                                </div>

                            </div>

                            {item.additionalItems &&
                                item.additionalItems.map((item, index) => (
                                    <div key={index} className="additional-items" style={{ fontWeight: 'normal', fontSize: '18px' }}>
                                        <li>{item.name}</li>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>

            <div className='promotion-code p-4 rounded-4'>
                <div style={{ marginBottom: '8px', display: 'flex' }}>
                    <input
                        type="text"
                        placeholder="Nhập mã khuyến mãi"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}

                    />
                    <button
                        onClick={handleApplyPromo}
                    >
                        Áp dụng
                    </button>
                </div>

                {/* Vùng ghi chú cho cửa hàng */}
                <textarea
                    placeholder="Ghi chú cho cửa hàng"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
            </div>


            <Form className=' mt-5 rounded-4 card-total-price p-3'>
                <div>
                    <div className='d-flex justify-content-between pl-3 pr-3'>
                        <h5>Giá gốc</h5>
                        <p>{totalPrice}.000 đ</p>
                    </div>
                </div>
                <div >
                    <div className='d-flex justify-content-between pl-3 pr-3'>
                        <h5>Giảm giá trên món</h5>
                        <p>{discountOnItem} đ</p>
                    </div>
                </div>
                <div>
                    <div className='d-flex justify-content-between pl-3 pr-3'>
                        <h5>Giảm giá khuyến mãi</h5>
                        <p>{discountValue} đ</p>
                    </div>
                </div>
                <div style={{ borderBottom: '1px solid black' }} className='mb-3'>
                    <div className='d-flex justify-content-between pl-3 pr-3'>
                        <h5>Phí giao hàng</h5>
                        <p>{shippingFee} đ</p>
                    </div>
                </div>

                <div>
                    <div className='d-flex justify-content-between pl-3 pr-3'>
                        <h5>Tổng cộng</h5>
                        <p>{totalPrice - discountValue + shippingFee - discountOnItem} đ</p>
                    </div>
                </div>

                <button className='w-100 mt-3 rounded-3'>
                    Đặt hàng
                </button>
            </Form>

        </Col>
    )
}

export default CheckoutRight