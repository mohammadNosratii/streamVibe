import { Divider } from "@nextui-org/react";
import FooterBottomPart from "./FooterBottomPart";
import FooterTopPart from "./FooterTopPart";

export default function Footer() {
  return (
    <div className="bg-white border dark:border-black-15 dark:bg-black-6 pt-12 pb-5 px-4 lg:pt-16 lg:pb-8 lg:px-24 2xl:pt-24 2xl:pb-12 2xl:px-40">
      <FooterTopPart />
      <Divider className="mt-28 mb-6" />
      <FooterBottomPart />
    </div>
  );
}
