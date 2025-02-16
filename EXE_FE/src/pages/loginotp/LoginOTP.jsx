import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./LoginOTP.module.css";
import bannerImage from "../../assets/images/Home - Banner.jpg";
import Footer from "../../components/footer/Footer";

const LoginOTP = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.value !== "" && index < 5) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleBackspace = (e, index) => {
        // Move to previous input on backspace
        if (e.key === "Backspace" && index > 0 && otp[index] === "") {
            inputRefs[index - 1].current.focus();
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.splitLayout}>
                    {/* Left side - Image */}
                    <div className={styles.imageSection}>
                        <img src={bannerImage} alt="Cơm tấm banner" />
                    </div>

                    {/* Right side - OTP Form */}
                    <div className={styles.formSection}>
                        <div className={styles.formContainer}>
                            <h1 className={styles.title}>
                                <span className={styles.primaryText}>Tấm</span>{" "}
                                ngon,{" "}
                                <span className={styles.secondaryText}>
                                    Tắc
                                </span>{" "}
                                nhớ!
                            </h1>

                            <p className={styles.subtitle}>
                                Một OTP vừa được gửi vào số điện thoại của bạn.
                            </p>

                            <form>
                                <div className={styles.otpContainer}>
                                    {otp.map((data, index) => {
                                        return (
                                            <input
                                                className={styles.otpInput}
                                                type="text"
                                                maxLength="1"
                                                key={index}
                                                value={data}
                                                ref={inputRefs[index]}
                                                onChange={(e) =>
                                                    handleChange(
                                                        e.target,
                                                        index
                                                    )
                                                }
                                                onKeyDown={(e) =>
                                                    handleBackspace(e, index)
                                                }
                                            />
                                        );
                                    })}
                                </div>

                                <button
                                    type="submit"
                                    className={styles.loginButton}
                                >
                                    Đăng ký
                                </button>
                            </form>

                            <div className={styles.divider}>
                                <Link
                                    to="/loginemployee"
                                    className={styles.dividerText}
                                >
                                    Bạn là người nhà của Tấm Tắc?
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LoginOTP;
