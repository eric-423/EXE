import LoginLayout from '../../components/login/LoginLayout';
import PasswordForm from '../../components/login/PasswordForm';

const LoginPassword = () => {
    return (
        <LoginLayout subtitle="Nhập mật khẩu để đăng nhập lần sau">
            <PasswordForm />
        </LoginLayout>
    );
};

export default LoginPassword;