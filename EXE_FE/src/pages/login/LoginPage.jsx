import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./LoginPage.module.css";
import bannerImage from "../../assets/images/Home - Banner.jpg";
import Footer from "../../components/footer/Footer";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        phoneNumber: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.splitLayout}>
                    {/* Left side - Image */}
                    <div className={styles.imageSection}>
                        <img src={bannerImage} alt="Cơm tấm banner" />
                    </div>

                    {/* Right side - Login Form */}
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
                                Thương hiệu cơm tấm hàng đầu dành cho sinh viên.
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div className={styles.inputGroup}>
                                    <input
                                        type="tel"
                                        placeholder="Số điện thoại"
                                        value={formData.phoneNumber}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                phoneNumber: e.target.value,
                                            })
                                        }
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={styles.loginButton}
                                >
                                    Gửi
                                </button>
                            </form>

                            <div className={styles.divider}>
                                <Link
                                    to="/loginemployee"
                                    className={styles.registerLink}
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

export default LoginPage;
