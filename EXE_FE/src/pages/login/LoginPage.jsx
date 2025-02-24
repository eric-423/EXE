import { useState } from "react";
import styles from "./LoginPage.module.css";
import bannerImage from "../../assets/images/Home - Banner.jpg";
import Footer from "../../components/footer/Footer";
import { useDocumentTitle } from "../../hooks";

const LoginPage = () => {
    // State to manage which view to show
    const [currentView, setCurrentView] = useState("customer"); // 'customer', 'employee', 'otp', 'password'
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    useDocumentTitle("Đăng nhập Tấm Tắc");

    const handleCustomerSubmit = (e) => {
        e.preventDefault();
        // Add phone validation here
        setCurrentView("otp");
    };

    const handleOTPSubmit = (e) => {
        e.preventDefault();
        // Validate OTP here if needed
        setCurrentView("password");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!password1 || !password2) {
            // Handle empty password
            return;
        }

        if (password1 !== password2) {
            // Handle password mismatch
            return;
        }

        // Proceed with form submission
        // ...
    };

    const handleChange = (element, index, isFirstPassword) => {
        if (isNaN(element.value)) return false;

        if (isFirstPassword) {
            setPassword1([
                ...password1.map((d, idx) =>
                    idx === index ? element.value : d
                ),
            ]);
        } else {
            setPassword2([
                ...password2.map((d, idx) =>
                    idx === index ? element.value : d
                ),
            ]);
        }
    };

    // Render different form content based on currentView
    const renderFormContent = () => {
        switch (currentView) {
            case "customer":
                return (
                    <>
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
                            <span
                                className={styles.registerLink}
                                onClick={() => setCurrentView("employee")}
                            >
                                Bạn là người nhà của Tấm Tắc?
                            </span>
                        </div>
                    </>
                );

            case "employee":
                return (
                    <>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Tài khoản" />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="password" placeholder="Mật khẩu" />
                        </div>
                        <button type="submit" className={styles.loginButton}>
                            Đăng nhập
                        </button>
                        <div className={styles.divider}>
                            <span
                                className={styles.registerLink}
                                onClick={() => setCurrentView("customer")}
                            >
                                Bạn là khách hàng của Tấm Tắc?
                            </span>
                        </div>
                    </>
                );

            case "otp":
                return (
                    <>
                        <div className={styles.otpContainer}>
                            {[...Array(6)].map((_, index) => (
                                <input
                                    key={index}
                                    className={styles.otpInput}
                                    type="text"
                                    maxLength="1"
                                    value={otp[index]}
                                    onChange={(e) => {
                                        const newOtp = [...otp];
                                        newOtp[index] = e.target.value;
                                        setOtp(newOtp);
                                        if (e.target.value && index < 5) {
                                            const nextInput =
                                                document.querySelector(
                                                    `input[name=otp-${
                                                        index + 1
                                                    }]`
                                                );
                                            if (nextInput) nextInput.focus();
                                        }
                                    }}
                                    name={`otp-${index}`}
                                />
                            ))}
                        </div>
                        <button
                            type="submit"
                            className={styles.loginButton}
                            onClick={handleOTPSubmit}
                        >
                            Xác nhận
                        </button>
                        <div className={styles.divider}>
                            <span
                                className={styles.registerLink}
                                onClick={() => setCurrentView("employee")}
                            >
                                Bạn là người nhà của Tấm Tắc?
                            </span>
                        </div>
                    </>
                );

            case "password":
                return (
                    <>
                        <div className={styles.passwordSection}>
                            <div>
                                <p className={styles.passwordTitle}>
                                    Nhập 6 số để đăng nhập lần sau
                                </p>
                                <div className={styles.otpContainer}>
                                    {password1.map((data, index) => (
                                        <input
                                            className={styles.otpInput}
                                            type="text"
                                            maxLength="1"
                                            key={index}
                                            value={data}
                                            onChange={(e) =>
                                                handleChange(
                                                    e.target,
                                                    index,
                                                    true
                                                )
                                            }
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className={styles.passwordTitle}>
                                    Nhập lại 6 mật khẩu
                                </p>
                                <div className={styles.otpContainer}>
                                    {password2.map((data, index) => (
                                        <input
                                            className={`${styles.otpInput} ${
                                                password1.join("") !==
                                                    password2.join("") &&
                                                password2.join("").length === 6
                                                    ? styles.errorInput
                                                    : ""
                                            }`}
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
                                        />
                                    ))}
                                </div>
                                {password1.join("") !== password2.join("") &&
                                    password2.join("").length === 6 && (
                                        <p className={styles.errorText}>
                                            Mật khẩu không khớp
                                        </p>
                                    )}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className={styles.loginButton}
                            onClick={handleSubmit}
                            disabled={
                                password1.join("") !== password2.join("") ||
                                password1.join("").length !== 6 ||
                                password2.join("").length !== 6
                            }
                        >
                            Đăng ký
                        </button>
                        <div className={styles.divider}>
                            <span
                                className={styles.registerLink}
                                onClick={() => setCurrentView("employee")}
                            >
                                Bạn là người nhà của Tấm Tắc?
                            </span>
                        </div>
                    </>
                );
        }
    };

    // Get subtitle based on current view
    const getSubtitle = () => {
        switch (currentView) {
            case "customer":
                return "Thương hiệu cơm tấm hàng đầu dành cho sinh viên.";
            case "employee":
                return "Đăng nhập dành cho nhân viên";
            case "otp":
                return "Nhập mã OTP được gửi đến số điện thoại của bạn";
            case "password":
                return "Nhập mật khẩu để đăng nhập lần sau";
            default:
                return "";
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.splitLayout}>
                    <div className={styles.imageSection}>
                        <img src={bannerImage} alt="Cơm tấm banner" />
                    </div>
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

                            <p className={styles.subtitle}>{getSubtitle()}</p>

                            <form
                                onSubmit={
                                    currentView === "customer"
                                        ? handleCustomerSubmit
                                        : undefined
                                }
                            >
                                {renderFormContent()}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LoginPage;
