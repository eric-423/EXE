import { useState } from "react";
import PropTypes from 'prop-types';

const EditMemberModal = ({ userData, onUpdate, onClose }) => {
    const [name, setName] = useState(userData.name);
    const [gender, setGender] = useState(userData.gender);
    const [birthdate, setBirthdate] = useState(userData.birthdate);
    const [phone, setPhone] = useState(userData.phone);
    const [email, setEmail] = useState(userData.email);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = {
            name,
            gender,
            birthdate,
            phone,
            email
        };
        onUpdate(updatedData);
        onClose();
    };

    return (
        <div className="modal fade show" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Thông tin thành viên</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Họ và tên*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gender" className="form-label">Giới tính*</label>
                                <select
                                    className="form-select"
                                    id="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    required
                                >
                                    <option value="nam">Nam</option>
                                    <option value="nu">Nữ</option>
                                    <option value="khac">Khác</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="birthdate" className="form-label">Ngày sinh*</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="birthdate"
                                    value={birthdate}
                                    onChange={(e) => setBirthdate(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Số điện thoại*</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="btn w-100"
                                    style={{ backgroundColor: '#7fb069', color: 'white' }}
                                >
                                    Cập nhật
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
EditMemberModal.propTypes = {
    userData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        birthdate: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
    onUpdate: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};
export default EditMemberModal;
