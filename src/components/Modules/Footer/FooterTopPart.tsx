import Facebook from "../../../assets/icons/Facebook";
import Linkedin from "../../../assets/icons/Linkedin";
import Twitter from "../../../assets/icons/Twitter";
import { footerTopItems } from "../../../constants/footerItems";
import FooterTopPartBox from "./FooterTopPartBox";

export default function FooterTopPart() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 lg:gap-8 lg:flex lg:justify-between">
      {footerTopItems.map((item, index) => (
        <FooterTopPartBox key={index} {...item} />
      ))}
      <div>
        <h2 className="text-base md:text-lg lg:text-xl mb-6">Connect With Us</h2>
        <div className="flex items-center gap-2.5 child:dark:bg-black-10 child:border child:dark:border-black-15 child:p-3 child:lg:p-4 child:rounded-lg child:transition-all child:duration-300 child:cursor-pointer child-hover:bg-red-45/70 child-hover:dark:bg-red-45 ">
          <div>
            <Facebook />
          </div>
          <div>
            <Twitter />
          </div>
          <div>
            <Linkedin />
          </div>
        </div>
      </div>
    </div>
  );
}
