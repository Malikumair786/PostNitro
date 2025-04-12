import { Card, Group, List, Text } from "@mantine/core";
import React from "react";
import classes from "./plans.module.css";
import { IconBolt, IconCircleCheck } from "@tabler/icons-react";
import ButtonComponent from "../../../components/Buttons/buttons";
import { useTranslations } from "next-intl";

const benefits = ["Access to GPT 4o-Mini", "5 downloads per month", "Access to basic templates"];
const FreePlan = () => {
  const t = useTranslations("planPage");

  // additionalLimitText
  return (
    <div>
      <Text className={classes.freePlanText} c="dimmed">
        {t("additionalLimitText")}<span className={classes.addOns}>{t("addOnsText")}</span>{t("subscriptionText")}
      </Text>

      <Card shadow="md" padding="lg" radius="md" withBorder className={classes.card}>
        <div>
          <Text size="xl" fw={700} className={classes.cardTitle}>
            FREE PLAN
          </Text>
          <Text size="xl" className={classes.price}>
            $0/month
          </Text>
          <Text size="sm" c="dimmed" my="sm">
            To help you get started.
          </Text>
        </div>
        <div>
          <List
            spacing="xs"
            size="sm"
            className={classes.benefits}
            icon={
              <div className={classes.listIcon}>
                <IconCircleCheck size={24} />
              </div>
            }
          >
            {benefits.map((benefit, idx) => (
              <List.Item key={idx}>{benefit}</List.Item>
            ))}
          </List>
        </div>

        <ButtonComponent variant="secondary">
          <Group gap={8} justify="center">
            <IconBolt size={18} />
            <Text size="md">Get Started</Text>
          </Group>
        </ButtonComponent>
      </Card>
    </div>
  );
};

export default FreePlan;
