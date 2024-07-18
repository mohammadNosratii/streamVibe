import AuthenticationCard from "../../components/Modules/AuthenticationCard/AuthenticationCard";
import LoginForm from "../../components/Templates/Login/LoginForm";

export default function Login() {
  return (
    <AuthenticationCard>
      <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-center">
        Login
      </h1>
      <LoginForm />
    </AuthenticationCard>
  );
}
