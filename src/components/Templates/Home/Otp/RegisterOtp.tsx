import { Button } from "@nextui-org/react";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { ArrowLeft } from "../../../../assets/icons/Arrows";

export default function RegisterOtp({
  showOtpHandler,
}: {
  showOtpHandler: () => void;
}) {
  const [otp, setOtp] = useState("");

  return (
    <form className="flex flex-col items-center gap-8">
      <div
        className="self-start w-10 h-10 rounded-full bg-gray-85 dark:bg-mainLight text-black-6 cursor-pointer flex items-center justify-center"
        onClick={showOtpHandler}
      >
        <ArrowLeft />
      </div>
      <p>The code sent to your number: 09941660317</p>
      <p className="text-center">Enter The 5-digit code</p>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={5}
        shouldAutoFocus
        inputType="number"
        renderSeparator={<span className="px-1 sm:px-2 md:px-2.5"></span>}
        renderInput={(props) => <input {...props} />}
        containerStyle="flex justify-center"
        inputStyle="dark:bg-gray-60 border border-black-15 outline-none h-12 !w-12 text-2xl text-bold rounded-md"
      />
      <Button className="text-xl">Verify</Button>
    </form>
  );
}
