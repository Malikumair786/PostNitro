import React from "react";
import PlanCard from "../../../components/Cards/Plan/page";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import FreePlan from "./FreePlan";
import { useMessages } from "next-intl";


const MonthlyPlans = () => {
  const theme = useMantineTheme();
  const isSmallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const messages = useMessages();
  const plans = messages.plans;
  return (
    <>
      <div style={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", justifyContent: "center", padding: "2rem 0", gap: "1rem" }}>
        {plans.map((plan: any, index: any) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
      <FreePlan />
    </>
  );
};

export default MonthlyPlans;
