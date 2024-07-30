import SubscriptionWrapper from "../../components/Modules/Subscription/Subscription";
import SubscriptionPlansDetail from "../../components/Templates/Subscription/SubscriptionPlansDetail";

export default function Subscription() {
  return (
    <div className="container">
      <SubscriptionWrapper />
      <SubscriptionPlansDetail />
    </div>
  );
}
