import '../styles/auth-form/auth-form.css';
declare function Login({ onLogin }: {
    onLogin: (data: {
        email: string;
        password: string;
    }) => void;
}): import("react/jsx-runtime").JSX.Element;
export default Login;
