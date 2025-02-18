import LoginLayout from '../../components/login/LoginLayout';
import EmployeeLoginForm from '../../components/login/EmployeeLoginForm';

const LoginEmployee = () => {
    return (
        <LoginLayout subtitle="Đăng nhập dành cho nhân viên">
            <EmployeeLoginForm />
        </LoginLayout>
    );
};

export default LoginEmployee;