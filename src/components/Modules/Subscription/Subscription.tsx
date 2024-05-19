import { Tab, Tabs } from "@nextui-org/react";
import { subscriptionPlan } from "../../../interfaces/subscriptionPlan.interface";
import SubscriptionBox from "./SubscriptionBox";
import { useState } from "react";

export default function Subscription({ plans }: { plans: subscriptionPlan[] }) {
  const [subscriptionPlanTime, setSubscriptionPlanTime] = useState("Monthly");

  const handleTabChange = (key: any) => {
    setSubscriptionPlanTime(key);
  };

  const uniqueTypes = Array.from(new Set(plans.map((plan) => plan.type)));

  return (
    <div className="container my-32 space-y-20">
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-between md:gap-14 xl:gap-20 2xl:gap-24 ">
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
        <div className="flex items-center gap-2.5 bg-white dark:bg-black-6 border dark:border-black-15 p-2.5 rounded-2xl">
          <Tabs aria-label="Dynamic tabs" onSelectionChange={handleTabChange}>
            {uniqueTypes.map((plan) => (
              <Tab key={plan} title={plan} />
            ))}
          </Tabs>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {plans
          .filter(
            (plan) =>
              plan.type.toLocaleLowerCase() ===
              subscriptionPlanTime.toLocaleLowerCase()
          )
          .map((plan, index) => (
            <SubscriptionBox key={index} {...plan} />
          ))}
      </div>
    </div>
  );
}
