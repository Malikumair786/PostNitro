import React from "react";
import PlanCard from "../../components/Cards/Plan/page";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const plans = [
  {
    planName: "Starter Plan",
    pricing: "$10/month",
    description: "Perfect for getting started.",
    benefits: ["Watermark-free exports", "Access to basic AI models (GPT-4o, Claude Haiku)", "30 downloads/month", "8 AI Generated Slides per Carousel"],
    buttonText: "Get Started",
  },
  {
    planName: "SOLOPRENEUR PLAN",
    pricing: "$20/month",
    description: "Perfect for solo creators.",
    benefits: [
      "Watermark-free exports",
      "Access to advanced AI models (GPT-4, Claude Sonnet)",
      "15 AI Generated Slides per Carousel",
      "Unlimited downloads",
      "Access to all templates",
      "Custom color palettes",
      "Create custom templates",
    ],
    buttonText: "Get Started",
  },
  {
    planName: "Team Plan",
    pricing: "$50/month",
    description: "Perfect for small teams.",
    benefits: ["100 AI generated images per months", "Up to 5 workspaces", "Up to 20 slides per carousel", "15 custom templates"],
    buttonText: "Get Started",
  },
];

const MonthlyPlans = () => {
  const theme = useMantineTheme();
  const isSmallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <div style={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", justifyContent: "center", padding: "2rem 0", gap: "1rem" }}>
      {plans.map((plan, index) => (
        <PlanCard key={index} {...plan} />
      ))}
    </div>
  );
};

export default MonthlyPlans;
