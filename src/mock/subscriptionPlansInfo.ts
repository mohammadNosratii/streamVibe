export default function subscriptionPlansInfo() {
  return [
    { attributes: "Price", basic: 9.99, standard: 12.99, Premium: 14.99 },
    {
      attributes: "Content",
      basic:
        "Access to a wide selection of movies and shows, including some new releases.",
      standard:
        "Access to a wide selection of movies and shows, including some new releases.",
      Premium:
        "Access to a wide selection of movies and shows, including some new releases.",
    },
    {
      attributes: "Devices",
      basic: "Watch on one device simultaneously",
      standard: "Watch on one device simultaneously",
      Premium: "Watch on one device simultaneously",
    },
    { attributes: "Free Trail", basic: 7, standard: 7, Premium: 7 },
    {
      attributes: "Cancel Anytime",
      basic: "Yes",
      standard: "Yes",
      Premium: "Yes",
    },
    { attributes: "HDR", basic: "No", standard: "Yes", Premium: "Yes" },
    { attributes: "Dolby Atmos", basic: "No", standard: "Yes", Premium: "Yes" },
    { attributes: "Ad - Free", basic: "No", standard: "Yes", Premium: "Yes" },
    {
      attributes: "Offline Viewing",
      basic: "No",
      standard: "Yes, for select titles.",
      Premium: "Yes, for all titles.",
    },
    {
      attributes: "Family Sharing",
      basic: "No",
      standard: "Yes, up to 5 family members.",
      Premium: "Yes, up to 6 family members.",
    },
  ];
}
