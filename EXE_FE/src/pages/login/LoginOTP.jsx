import LoginLayout from '../../components/login/LoginLayout';
import OTPForm from '../../components/login/OTPForm';

const LoginOTP = () => {
    return (
        <LoginLayout subtitle="Nhập mã OTP được gửi đến số điện thoại của bạn">
            <OTPForm />
        </LoginLayout>
    );
};

export default LoginOTP;