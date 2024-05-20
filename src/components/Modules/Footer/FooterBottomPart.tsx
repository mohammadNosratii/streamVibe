export default function FooterBottomPart() {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center justify-between">
      <h4 className="text-sm md:text-base lg:text-lg text-gray-60">
        @2023 streamvibe, All Rights Reserved
      </h4>
      <ul className="flex items-center gap-5 text-gray-60 text-sm md:text-base lg:text-lg child-hover:text-red-45 child:cursor-pointer child:transition-all child:duration-300">
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
      </ul>
    </div>
  );
}
