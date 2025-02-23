import { Col } from 'react-bootstrap'
import { useState } from 'react';

const CheckoutRight = () => {
    const [promoCode, setPromoCode] = useState('');
    const [note, setNote] = useState('');

    const handleApplyPromo = () => {
        console.log('Mã khuyến mãi:', promoCode);
    };

    const combo = [
        {
            name: "Cơm tấm sườn bì chả",
            price: "35.000đ",
            quantity: "x1",
            additionalItems: [
                { name: "Chả" },
                { name: "Trứng" }
            ]
        },
        {
            name: "Cơm tấm sườn bì chả",
            price: "35.000đ",
            quantity: "x1",
            additionalItems: [
                { name: "Chả" },
                { name: "Trứng" }
            ]
        },
        {
            name: "Canh chua cá",
            price: "20.000đ",
            quantity: "x1",
        }
    ]

    return (
        <Col md={5} >
            <div className='comfirm-order'>
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
                                    <p>{item.quantity}</p>
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

            <div className='promotion-code p-4'>
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

        </Col>
    )
}

export default CheckoutRight