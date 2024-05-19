interface subscriptionPlan {
  type: string
  title: string;
  des: string;
  price: string;
  attributes: { title: string }[];
  
}

export type { subscriptionPlan };
