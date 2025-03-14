import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./LoginPage.module.css";
import bannerImage from "../../assets/images/Home - Banner.jpg";
import { useDocumentTitle } from "../../hooks";
import LoginLayout from "../../components/login/LoginLayout";
import { BASE_URL, API_ROUTES } from "../../config/api";
import axios from "axios";

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // State to manage which view to show
    const [currentView, setCurrentView] = useState(() => {
        // Initialize from sessionStorage or default to "customer"
        return sessionStorage.getItem("loginView") || "customer";
    });
    const [phoneNumber, setPhoneNumber] = useState();
    const [phoneError, setPhoneError] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [loginError, setLoginError] = useState("");
    const [isExistingUser, setIsExistingUser] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [otpError, setOtpError] = useState("");

    useDocumentTitle("Đăng nhập Tấm Tắc");

    // Save state to sessionStorage when it changes
    useEffect(() => {
        sessionStorage.setItem("loginView", currentView);
        sessionStorage.setItem("phoneNumber", phoneNumber);
    }, [currentView, phoneNumber]);

    // Handle browser back/forward navigation
    useEffect(() => {
        const handlePopState = () => {
            const savedView = sessionStorage.getItem("loginView");
            const savedPhone = sessionStorage.getItem("phoneNumber");
            if (savedView) {
                setCurrentView(savedView);
            }
            if (savedPhone) {
                setPhoneNumber(savedPhone);
            }
        };

        window.addEventListener("popstate", handlePopState);
        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    // Clear session storage on component unmount
    useEffect(() => {
        return () => {
            // Only clear if navigating away from login flow
            if (!location.pathname.includes("login")) {
                sessionStorage.removeItem("loginView");
                sessionStorage.removeItem("phoneNumber");
            }
        };
    }, [location]);

    const getSubtitle = () => {
        switch (currentView) {
            case "customer":
                return "Thương hiệu cơm tấm hàng đầu dành cho sinh viên.";
            case "employee":
                return "Đăng nhập dành cho nhân viên";
            case "otp":
                return "Hãy kiểm tra Zalo của bạn để nhận mã OTP";
            case "password":
                return "Đăng ký mật khẩu để đăng nhập lần sau";
            case "existingUser":
                return "Chào mừng bạn quay lại";
            case "registerPassword":
                return "Đăng ký mật khẩu để đăng nhập lần sau";
            default:
                return "";
        }
    };

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^(0[3|5|7|8|9])[0-9]{8}$/;
        return phoneRegex.test(phone);
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/[^\d]/g, "");
        setPhoneNumber(value);
        setPhoneError("");
    };

    const handleCustomerSubmit = async (e) => {
        e.preventDefault();

        if (!phoneNumber) {
            setPhoneError("Vui lòng nhập số điện thoại");
            return;
        }
        if (!validatePhoneNumber(phoneNumber)) {
            setPhoneError("Số điện thoại không hợp lệ");
            return;
        }

        try {
            // First API: Sign up
            const signUpResponse = await axios.post(
                `${BASE_URL}${API_ROUTES.SIGN_UP}`,
                {
                    phoneNumber: phoneNumber,
                }
            );

            if (signUpResponse.status === 201) {
                // Store user data
                sessionStorage.setItem(
                    "userData",
                    JSON.stringify(signUpResponse.data)
                );
                sessionStorage.setItem("phoneNumber", phoneNumber);

                // Change view to OTP screen
                setCurrentView("otp");
                setPhoneError("");

                // Second API: Generate OTP code
                try {
                    await axios.post(
                        "https://tamtac-6548a8185ba9.herokuapp.com/api/v1/verify-code/generate-code",
                        {
                            phoneNumber: phoneNumber,
                            mode: "dev",
                        }
                    );
                } catch (otpError) {
                    console.error("Generate OTP error:", otpError);
                    setPhoneError("Không thể tạo mã OTP. Vui lòng thử lại.");
                }
            }
        } catch (error) {
            if (
                error.response?.data?.name === "SequelizeUniqueConstraintError"
            ) {
                setPhoneError("Số điện thoại này đã được đăng ký");
            } else {
                setPhoneError("Có lỗi xảy ra. Vui lòng thử lại sau.");
            }
        }
    };

    const checkUserExists = async (phone) => {
        try {
            // Replace with your actual API endpoint
            const response = await fetch(
                `${BASE_URL}/api/v1/users/check-phone`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ phone }),
                }
            );
            const data = await response.json();

            setIsExistingUser(data.exists);
            if (data.exists) {
                setCurrentView("existingUser");
            } else {
                setCurrentView("otp");
            }
        } catch (error) {
            console.error("Error checking user:", error);
            // If API fails, assume new user
            setIsExistingUser(false);
            setCurrentView("otp");
        }
    };

    const handleOTPSubmit = async (e) => {
        e.preventDefault();
        const otpValue = otp.join("");
        if (otpValue.length === 6) {
            try {
                const response = await axios.post(
                    "https://tamtac-6548a8185ba9.herokuapp.com/api/v1/verify-code/verify-phone-code",
                    {
                        code: otpValue,
                        phoneNumber: phoneNumber,
                    }
                );

                if (response.data.status === "success") {
                    // Store token in localStorage
                    localStorage.setItem("token", response.data.token);

                    // Move to password screen
                    setCurrentView("password");
                    setOtpError("");
                }
            } catch (error) {
                console.error("Verify OTP error:", error);
                setOtpError("Mã OTP không đúng. Vui lòng thử lại.");
            }
        }
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordError("Mật khẩu không khớp");
            return;
        }
        // Here you can add your password registration API call
        // Then navigate to success or home page
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

    // Add this function to handle backspace
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            e.preventDefault();
            let lastFilledIndex = 5;
            while (lastFilledIndex >= 0 && !otp[lastFilledIndex]) {
                lastFilledIndex--;
            }
            if (lastFilledIndex >= 0) {
                const newOtp = [...otp];
                newOtp[lastFilledIndex] = "";
                setOtp(newOtp);
                const currentInput = document.querySelector(
                    `input[name=otp-${lastFilledIndex}]`
                );
                if (currentInput) currentInput.focus();
            }
        }
    };

    const handleExistingUserSubmit = async (e) => {
        e.preventDefault();
        setLoginError("");
        try {
            const response = await fetch(`${BASE_URL}${API_ROUTES.SIGN_IN}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: `${phoneNumber}@gmail.com`,
                    password: password1,
                }),
                credentials: "include", // Important for cookies
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);
                // Clear session storage before navigating home
                sessionStorage.removeItem("loginView");
                sessionStorage.removeItem("phoneNumber");
                navigate("/");
            } else {
                setLoginError(data.message || "Đăng nhập không thành công");
            }
        } catch (error) {
            console.error("Login error:", error);
            setLoginError("Có lỗi xảy ra, vui lòng thử lại sau");
        }
    };

    const handleBackToRegistration = () => {
        setCurrentView("customer");
        setOtp(["", "", "", "", "", ""]);
        setPassword("");
        setConfirmPassword("");
        setPasswordError("");
    };

    // Render different form content based on currentView
    const renderForm = () => {
        switch (currentView) {
            case "customer":
                return (
                    <>
                        {/* <div className={styles.dividerLine}>
                            <span>Bạn là khách hàng của Tấm Tắc?</span>
                        </div> */}
                        <form onSubmit={handleCustomerSubmit}>
                            <div className={styles.inputGroup}>
                                <input
                                    type="tel"
                                    placeholder="Số điện thoại"
                                    value={phoneNumber}
                                    onChange={handlePhoneChange}
                                    maxLength="10"
                                    className={
                                        phoneError ? styles.errorInput : ""
                                    }
                                />
                                {phoneError && (
                                    <p className={styles.errorText}>
                                        {phoneError}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className={styles.loginButton}
                            >
                                Đăng ký
                            </button>
                        </form>
                        <div className={styles.divider}>
                            <span
                                className={styles.dividerText}
                                onClick={() => setCurrentView("employee")}
                            >
                                Bạn là người nhà của Tấm Tắc?
                            </span>
                        </div>
                        <div className={styles.divider}>
                            <span
                                className={styles.dividerText}
                                onClick={() => setCurrentView("existingUser")}
                            >
                                Đã có tài khoản? Đăng nhập ngay
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
                    <form onSubmit={handleOTPSubmit}>
                        {/* <div className={styles.dividerLine}>
                            <span>
                                Nhập mã OTP được gửi đến số điện thoại của bạn
                            </span>
                        </div> */}
                        <div className={styles.otpContainer}>
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    className={styles.otpInput}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
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
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    name={`otp-${index}`}
                                />
                            ))}
                        </div>
                        <button type="submit" className={styles.loginButton}>
                            Xác nhận
                        </button>
                        <button
                            type="button"
                            onClick={handleBackToRegistration}
                            className={`${styles.loginButton} ${styles.secondaryButton}`}
                        >
                            Quay lại
                        </button>
                    </form>
                );

            case "registerPassword":
                return (
                    <form onSubmit={handlePasswordSubmit}>
                        {/* <div className={styles.dividerLine}>
                            <span>Đăng ký mật khẩu</span>
                        </div> */}
                        <div className={styles.inputGroup}>
                            <input
                                type="password"
                                placeholder="Nhập mật khẩu"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordError("");
                                }}
                                className={
                                    passwordError ? styles.errorInput : ""
                                }
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <input
                                type="password"
                                placeholder="Nhập lại mật khẩu"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    setPasswordError("");
                                }}
                                className={
                                    passwordError ? styles.errorInput : ""
                                }
                            />
                            {passwordError && (
                                <p className={styles.errorText}>
                                    {passwordError}
                                </p>
                            )}
                        </div>
                        <button type="submit" className={styles.loginButton}>
                            Xác nhận
                        </button>
                        <button
                            type="button"
                            onClick={handleBackToRegistration}
                            className={`${styles.loginButton} ${styles.secondaryButton}`}
                        >
                            Quay lại
                        </button>
                    </form>
                );

            case "existingUser":
                return (
                    <form onSubmit={handleExistingUserSubmit}>
                        <div className={styles.inputGroup}>
                            <input
                                type="tel"
                                placeholder="Số điện thoại"
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                maxLength="10"
                                className={phoneError ? styles.errorInput : ""}
                            />
                            {phoneError && (
                                <p className={styles.errorText}>{phoneError}</p>
                            )}
                        </div>
                        <div className={styles.inputGroup}>
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                value={password1}
                                onChange={(e) => {
                                    setPassword1(e.target.value);
                                    setLoginError("");
                                }}
                                className={`${styles.passwordInput} ${
                                    loginError ? styles.errorInput : ""
                                }`}
                            />
                            {loginError && (
                                <p className={styles.errorText}>{loginError}</p>
                            )}
                        </div>
                        <button type="submit" className={styles.loginButton}>
                            Đăng nhập
                        </button>
                        <div className={styles.divider}>
                            <span
                                className={styles.dividerText}
                                onClick={() => {
                                    setCurrentView("customer");
                                    setLoginError("");
                                    setPassword1("");
                                }}
                            >
                                Quay lại đăng ký
                            </span>
                        </div>
                    </form>
                );

            default:
                return null;
        }
    };

    const token = localStorage.getItem("token");

    return <LoginLayout subtitle={getSubtitle()}>{renderForm()}</LoginLayout>;
};

export default LoginPage;
