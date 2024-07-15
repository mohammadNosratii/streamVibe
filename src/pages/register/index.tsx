import { useState } from "react";
import AuthenticationCard from "../../components/Modules/AuthenticationCard/AuthenticationCard";
import RegisterOtp from "../../components/Templates/Home/Otp/RegisterOtp";
import RegisterForm from "../../components/Templates/Register/RegisterForm";

export default function Register() {
  const [isShowOtp, setIsShowOtp] = useState<boolean>(false);

  const otphandler = () => {
    setIsShowOtp(!isShowOtp);
  };
  
  return (
    <AuthenticationCard>
      {isShowOtp ? (
        <RegisterOtp showOtpHandler={otphandler} />
      ) : (
        <RegisterForm showOtpHandler={otphandler} />
      )}
    </AuthenticationCard>
  );
}
