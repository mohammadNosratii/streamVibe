import subscriptionPlansInfo from "../../../mock/subscriptionPlansInfo";

export default function SubscriptionPlansDetail() {
  return (
    <div className="mb-32 space-y-20">
      <div className="space-y-3">
        <h2 className="text-2xl lg:text-3xl 2xl:text-4xl">
          Compare our plans and find the right one for you
        </h2>
        <p className="text-gray-60 text-sm lg:text-base 2xl:text-lg">
          StreamVibe offers three different plans to fit your needs: Basic,
          Standard, and Premium. Compare the features of each plan and choose
          the one that's right for you.
        </p>
      </div>
      <table className="rounded-[10px] border-separate border border-black-15">
        <thead>
          <tr className="dark:child:bg-black-6 child:text-start child:subscriptionTable">
            <th>Features</th>
            <th>Basic</th>
            <th>Standard</th>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          {subscriptionPlansInfo().map((item, index) => (
            <tr key={index} className="child:subscriptionTable">
              <td>{item.attributes}</td>
              <td>
                {item.attributes === "Price" && <span>$</span>}
                {item.basic}
                {item.attributes === "Price" ? (
                  <span>/Month</span>
                ) : (
                  item.attributes === "Free Trail" && <span> Days</span>
                )}
              </td>
              <td>
                {item.attributes === "Price" && <span>$</span>}
                {item.standard}
                {item.attributes === "Price" ? (
                  <span>/Month</span>
                ) : (
                  item.attributes === "Free Trail" && <span> Days</span>
                )}
              </td>
              <td>
                {item.attributes === "Price" && <span>$</span>}
                {item.Premium}
                {item.attributes === "Price" ? (
                  <span>/Month</span>
                ) : (
                  item.attributes === "Free Trail" && <span> Days</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
