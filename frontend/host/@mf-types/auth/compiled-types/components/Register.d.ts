import '../styles/auth-form/auth-form.css';
declare function Register({ onRegister }: {
    onRegister: (data: {
        email: string;
        password: string;
    }) => void;
}): import("react/jsx-runtime").JSX.Element;
export default Register;
