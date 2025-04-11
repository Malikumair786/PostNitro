import { Badge, useMantineTheme } from "@mantine/core";
import React from "react";
import classes from "./plans.module.css";
import PlanCard from "../../components/Cards/Plan/page";
import { useMediaQuery } from '@mantine/hooks';
import FreePlan from "./FreePlan";


const plans = [
  {
    planName: "STARTER PLAN",
    pricing: "$10/month",
    description: "Perfect for getting started.",
    benefits: ["Watermark-free exports", "Access to basic AI models (GPT-4o, Claude Haiku)", "30 downloads/month", "8 AI Generated Slides per Carousel"],
    buttonText: "Get Started",
  },
  {
    planName: "SOLOPRENEUR PLAN",
    previousPrice: "Previously: $20/month",
    pricing: "$12/month",
    saving: "Saves you $96 per year.",
    description: "Perfect for solo creators.",
    benefits: [
      "Watermark-free exports",
      "Access to advanced AI models (GPT-4, Claude Sonnet)",
      "15 AI Generated Slides per Carousel",
      "Upto 5 Brands",
      "Unlimited downloads",
      "Access to all templates",
      "Custom color palettes",
      "Create custom templates",
    ],
    buttonText: "Get Started",
  },
  {
    planName: "TEAM PLAN",
    previousPrice: "Previously: $50/month",
    pricing: "$30/month",
    saving: "Saves you $240 per year.",
    description: "Perfect for small teams.",
    benefits: ["100 AI generated images per months", "Up to 5 workspaces", "Up to 20 slides per carousel", "15 custom templates"],
    buttonText: "Get Started",
  },
];

const YearlyPlans = () => {
  const theme = useMantineTheme();
  const isSmallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <>
      <div className={classes.badgeParent}>
        <Badge className={classes.badge}>40% Off On Yearly Subscription! - ANNUAL40OFF</Badge>
      </div>
      <div style={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row" , justifyContent: "center", padding: "2rem 0", gap: "1rem" }}>
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
      <FreePlan/>
    </>
  );
};

export default YearlyPlans;
