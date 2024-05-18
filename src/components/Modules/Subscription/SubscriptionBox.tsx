import { Button } from "@nextui-org/react";
import { subscriptionPlan } from "../../../interfaces/subscriptionPlan.interface";

export default function SubscriptionBox({
  title,
  des,
  price,
  attributes,
}: subscriptionPlan) {
  return (
    <div className="flex flex-col items-center justify-between gap-10 bg-white dark:bg-black-10 border dark:border-black-15 rounded-xl p-6 2xl:p-12">
      <div className="text-center space-y-5">
        <h3 className="text-black-6 dark:text-white text-lg md:text-2xl">{title}</h3>
        <p className="text-black-30/100 dark:text-gray-60 text-sm md:text-[16px] h-[60px] line-clamp-3">{des}</p>
        <div className="pt-4">
          <span className="text-red-45 text-2xl 2xl:text-4xl">${price}</span>
          <span className="text-black-30/100 dark:text-gray-60 text-sm">/Month</span>
        </div>
      </div>
      <ul className="child:flex child:items-center child:gap-3 child:dark:text-gray-60 child:text-base">
        {attributes.map((attribute, index) => (
          <li key={index}>
            <div className="w-1.5 h-1.5 rounded-full bg-red-45"></div>
            {attribute.title}
          </li>
        ))}
      </ul>

      <Button radius="full" className="bg-red-45 text-white">
        Choose Plan
      </Button>
    </div>
  );
}