import { useState } from 'react';
import styles from './LoginForms.module.css';

const CustomerForm = ({ onSwitch, onSuccess }) => {
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (phoneNumber) {
            onSuccess();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <input
                    type="tel"
                    placeholder="Số điện thoại"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <button type="submit" className={styles.loginButton}>
                Đăng nhập
            </button>
            <div className={styles.divider}>
                <span className={styles.dividerText} onClick={onSwitch}>
                    Bạn là người nhà của Tấm Tắc?
                </span>
            </div>
        </form>
    );
};

export default CustomerForm;