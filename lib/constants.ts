import { PLAN_TYPE } from "./types";

export const plans: PLAN_TYPE[] = [
  {
    name: "Free plan",
    description: "Make automated dms, start now!",
    pricing: 0,
    features: ["DM Responses from comments", "Automated DMs on text messages"],
    cta: "Get started now",
    featured: false,
    href: "",
    id: "free_plan",
  },
  {
    name: "AI plan",
    description: "Make automated dms using AI",
    pricing: 129,
    features: [
      "DM Responses from comments",
      "Automated DMs on text messages",
      "AI features to enchance DMs and engaging",
    ],
    cta: "Upgrade now",
    featured: true,
    href: "",
    id: "paid_plan",
  },
];
