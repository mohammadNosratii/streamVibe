export default function subscriptionPlan() {
  return [
    {
      title: "Basic Plan",
      des: "Enjoy an extensive library of movies and shows, featuring a range of content.",
      price: "9.99",
      attributes: [
        { title: " Free Trail: 7 Days" },
        { title: "Ad - Free: No" },
        { title: " Offline Viewing: No" },
      ],
    },
    {
      title: "Standard Plan",
      des: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      price: "12.99",
      attributes: [
        { title: " Free Trail: 7 Days" },
        { title: "Ad - Free: Yes" },
        { title: " Offline Viewing: for select titles" },
      ],
    },
    {
      title: "Premium Plan",
      des: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      price: "14.99",
      attributes: [
        { title: " Free Trail: 7 Days" },
        { title: "Ad - Free: Yes" },
        { title: " Offline Viewing: for all titles" },
      ],
    },
  ];
}
