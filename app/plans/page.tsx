"use client";
import { Overlay, Tabs, Text, Title } from "@mantine/core";
import React, { useState } from "react";
import classes from "./plans.module.css";
import MonthlyPlans from "./MonthlyPlans";
import YearlyPlans from "./YearlyPlans";

const page = () => {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");
  return (
    <div className={classes.wrapper}>
      <Overlay opacity={0} zIndex={0} />

      <div className={classes.inner}>
        <Title className={classes.title}>Plans for Your Carousel Creation Needs</Title>
        <Text c="dimmed" size="md" className={classes.description}>
          From solo creators to agencies, we have a plan that fits your requirements.
        </Text>
        <Tabs
          value={activeTab}
          onChange={(value) => setActiveTab(value as "monthly" | "yearly")}
          classNames={{
            list: classes.tabList,
            tab: classes.tab,
          }}
          className={classes.tabs}
        >
          <div className={classes.tabListWrapper}>
            <Tabs.List>
              <Tabs.Tab value="monthly">Monthly</Tabs.Tab>
              <Tabs.Tab value="yearly">Yearly</Tabs.Tab>
            </Tabs.List>
          </div>

          <Tabs.Panel value="monthly">
            <MonthlyPlans />
          </Tabs.Panel>
          <Tabs.Panel value="yearly">
            <YearlyPlans />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
