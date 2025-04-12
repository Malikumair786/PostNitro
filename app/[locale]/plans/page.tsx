"use client";
import { Overlay, Tabs, Text, Title } from "@mantine/core";
import React, { useState } from "react";
import classes from "./plans.module.css";
import MonthlyPlans from "./MonthlyPlans";
import YearlyPlans from "./YearlyPlans";
import { useTranslations } from "next-intl";

const page = () => {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");
  const t = useTranslations("planPage");

  return (
    <div className={classes.wrapper}>
      <Overlay opacity={0} zIndex={0} />

      <div className={classes.inner}>
        <Title className={classes.title}>{t("heading")}</Title>
        <Text c="dimmed" size="md" className={classes.description}>
          {t("descripiton")}
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
              <Tabs.Tab value="monthly">{t("monthly")}</Tabs.Tab>
              <Tabs.Tab value="yearly">{t("yearly")}</Tabs.Tab>
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
