import styles from "./LoginLayout.module.css";
// import bannerImage from "../../assets/images/Home - Banner.jpg";
import bannerImage from "../../../src/assets/Images/Home - Banner.jpg";


// import Footer from "../../components/homePage/Footer/Footer";
import PropTypes from "prop-types";

const LoginLayout = ({ children, subtitle }) => {
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
                            <p className={styles.subtitle}>{subtitle}</p>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};
LoginLayout.propTypes = {
    children: PropTypes.node.isRequired,
    subtitle: PropTypes.string,
};

export default LoginLayout;
