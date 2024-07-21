import AuthenticationCard from "../../components/Modules/AuthenticationCard/AuthenticationCard";
import LoginForm from "../../components/Templates/Login/LoginForm";

export default function Login() {
  return (
    <AuthenticationCard>
      <h1 className="text-3xl md:text-5xl font-manropeBold dark:text-white">
        Login
      </h1>
      <p className="font-manropeMedium text-gray-60">Welcome back</p>
      <LoginForm />
    </AuthenticationCard>
  );
}
