import { subscriptionPlan } from "../../../interfaces/subscription.interface";
import SubscriptionBox from "./SubscriptionBox";

export default function Subscription({ plans }: { plans: subscriptionPlan[] }) {
  return (
    <div className="container my-32 space-y-20">
      <div className="flex flex-col lg:flex-row gap-5 items-start md:items-center justify-between md:gap-14 xl:gap-20 2xl:gap-24 ">
        <div className="space-y-3">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl">
            Choose the plan that's right for you
          </h2>
          <p className="text-gray-60 text-sm lg:text-base 2xl:text-lg">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <div className="flex items-center gap-2.5 dark:bg-black-6 border border-black-15 p-2.5 rounded-lg">
          <button
            className="bg-black-12 py-3 px-5
           md:py-3.5 md:px-6 rounded-lg"
          >
            Monthly
          </button>
          <button className="py-3 px-5">Yearly</button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {plans.map((plan, index) => (
          <SubscriptionBox key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}
