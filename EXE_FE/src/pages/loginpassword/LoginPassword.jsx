import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./LoginPassword.module.css";
import bannerImage from "../../assets/images/Home - Banner.jpg";
import Footer from "../../components/footer/Footer";

const LoginPassword = () => {
    const [password1, setPassword1] = useState(["", "", "", "", "", ""]);
    const [password2, setPassword2] = useState(["", "", "", "", "", ""]);
    const inputRefs1 = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];
    const inputRefs2 = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    const handleChange = (element, index, isFirstPassword) => {
        if (isNaN(element.value)) return false;

        if (isFirstPassword) {
            setPassword1([
                ...password1.map((d, idx) =>
                    idx === index ? element.value : d
                ),
            ]);
            if (element.value !== "" && index < 5) {
                inputRefs1[index + 1].current.focus();
            }
        } else {
            setPassword2([
                ...password2.map((d, idx) =>
                    idx === index ? element.value : d
                ),
            ]);
            if (element.value !== "" && index < 5) {
                inputRefs2[index + 1].current.focus();
            }
        }
    };

    const handleBackspace = (e, index, isFirstPassword) => {
        const refs = isFirstPassword ? inputRefs1 : inputRefs2;
        if (e.key === "Backspace" && index > 0) {
            refs[index - 1].current.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const pass1 = password1.join("");
        const pass2 = password2.join("");
        if (pass1 === pass2) {
            console.log("Passwords match!");
        } else {
            console.log("Passwords do not match!");
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

                    {/* Right side - Password Form */}
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
                                Nhập mật khẩu để đăng nhập lần sau.
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div className={styles.passwordSection}>
                                    <div className={styles.otpContainer}>
                                        {password1.map((data, index) => (
                                            <input
                                                className={styles.otpInput}
                                                type="text"
                                                maxLength="1"
                                                key={index}
                                                value={data}
                                                ref={inputRefs1[index]}
                                                onChange={(e) =>
                                                    handleChange(
                                                        e.target,
                                                        index,
                                                        true
                                                    )
                                                }
                                                onKeyDown={(e) =>
                                                    handleBackspace(
                                                        e,
                                                        index,
                                                        true
                                                    )
                                                }
                                            />
                                        ))}
                                    </div>
                                    <p className={styles.subtitle}>
                                        Nhập lại mật khẩu để đăng nhập lần sau.
                                    </p>
                                    <div className={styles.otpContainer}>
                                        {password2.map((data, index) => (
                                            <input
                                                className={styles.otpInput}
                                                type="text"
                                                maxLength="1"
                                                key={index}
                                                value={data}
                                                ref={inputRefs2[index]}
                                                onChange={(e) =>
                                                    handleChange(
                                                        e.target,
                                                        index,
                                                        false
                                                    )
                                                }
                                                onKeyDown={(e) =>
                                                    handleBackspace(
                                                        e,
                                                        index,
                                                        false
                                                    )
                                                }
                                            />
                                        ))}
                                    </div>
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

export default LoginPassword;
