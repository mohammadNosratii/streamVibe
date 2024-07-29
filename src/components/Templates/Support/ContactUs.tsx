import { Image } from "@nextui-org/react";
import contactUs from "../../../assets/images/contactUs.png";
import ContactUsForm from "./ContactUsForm";

export default function ContactUs() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-5 flex flex-col gap-4">
        <h1 className="font-manropeBold text-5xl leading-[60px]">
          Welcome to our support page!
        </h1>
        <p className="font-manropeRegular text-gray-60">
          We're here to help you with any problems you may be having with our
          product.
        </p>
        <div className="bg-black-15 p-2 rounded-xl">
          <Image
            alt=""
            src={contactUs}
            className="bg-black-6 w-full"
            classNames={{
              wrapper: ["!max-w-none"],
            }}
          />
        </div>
      </div>
      {/* //TODO should update height of inputs like figma */}
      <div className="col-span-7 bg-white h-max dark:bg-black-6 border-2 dark:border-black-15 rounded-xl px-5 py-10">
        <ContactUsForm />
      </div>
    </div>
  );
}
