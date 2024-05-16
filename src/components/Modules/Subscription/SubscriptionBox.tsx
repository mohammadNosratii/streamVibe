import { subscriptionPlan } from "../../../interfaces/subscription.interface";

export default function SubscriptionBox({
  title,
  des,
  price,
  attributes,
}: subscriptionPlan) {
  return (
    <div className="flex flex-col items-center gap-10 bg-black-10 border border-black-15 rounded-xl p-6 2xl:p-12">
      <div className="text-center space-y-5">
        <h3 className="text-lg md:text-2xl">{title}</h3>
        <p className="text-gray-60 text-sm md:text-[16px]">{des}</p>
        <div className="pt-4">
          <span className="text-red-45 text-2xl 2xl:text-4xl">${price}</span>
          <span className="text-gray-60 text-sm">/Month</span>
        </div>
      </div>
      <ul className="child:flex child:items-center child:gap-3 child:text-gray-60 child:text-base">
        {attributes.map((attribute, index) => (
          <li key={index}>
            <div className="w-1.5 h-1.5 rounded-full bg-red-45"></div>
            {attribute.title}
          </li>
        ))}
      </ul>
      <button className="bg-red-45 text-sm rounded-[45px] py-3 px-5">
        Choose Plan
      </button>
    </div>
  );
}
