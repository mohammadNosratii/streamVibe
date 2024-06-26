import { Tab, Tabs } from "@nextui-org/react";
import { subscriptionPlan } from "../../../interfaces/subscriptionPlan.interface";
import SubscriptionBox from "./SubscriptionBox";
import { useState } from "react";
import { useGetSubscriptionsApi } from "../../../hooks/api/useHomeApi";
import SubscriptionBoxSkeleton from "../Skeletons/SubscriptionBoxSkeleton";

export default function Subscription() {
  const [subscriptionPlanTime, setSubscriptionPlanTime] = useState<
    string | number
  >("Monthly");

  const { data: getSubscriptions, isLoading } = useGetSubscriptionsApi();

  const uniqueTypes: string[] = Array.from(
    new Set(getSubscriptions?.map((plan: subscriptionPlan) => plan.type))
  );

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
        <div className="flex items-center gap-2.5 p-2.5 rounded-2xl">
          <Tabs
            aria-label="Dynamic tabs"
            classNames={{
              tabList: [
                "bg-white dark:bg-black-6 border-[1px] border-1 dark:border-black-15 p-3 sm:p-3.5 lg:p-4",
              ],
            }}
            selectedKey={subscriptionPlanTime}
            onSelectionChange={setSubscriptionPlanTime}
          >
            {uniqueTypes.map((plan, index) => (
              <Tab
                key={index}
                title={plan}
                className="p-2 sm:p-3 md:p-3.5 lg:p-5"
              />
            ))}
          </Tabs>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {isLoading ? Array.from({ length: 3 }, (_, index) => (
          <SubscriptionBoxSkeleton key={index} />
        )) : getSubscriptions
          ?.filter(
            (plan: subscriptionPlan) => plan.type === subscriptionPlanTime
          )
          .map((plan: subscriptionPlan, index: number) => (
            <SubscriptionBox key={index} {...plan} />
          ))}
      </div>
    </div>
  );
}
