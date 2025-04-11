import React from "react";
import { Card, Text, Button, List, Group } from "@mantine/core";
import classes from "./plan.module.css";
import { IconBolt, IconCircleCheck } from "@tabler/icons-react";
import ButtonComponent from "../../Buttons/buttons";

interface PlanCardProps {
  planName: string;
  previousPrice?: string;
  pricing: string;
  benefits: string[];
  buttonText: string;
  saving?: string;
  description?: string;
}

const PlanCard = ({ planName, previousPrice, pricing, benefits, buttonText, saving, description }: PlanCardProps) => {
  return (
    <Card shadow="md" padding="lg" radius="md" withBorder className={planName === "SOLOPRENEUR PLAN" ? classes.soloPreneur : classes.card}>
      <Text size="xl" fw={700} className={classes.title}>
        {planName}
      </Text>
      {previousPrice && (
        <Text size="sm" fw={700} className={classes.previousPrice}>
          {previousPrice}
        </Text>
      )}
      <Text size="xl" className={classes.price}>
        {pricing}
      </Text>
      {saving && <Text className={classes.saving}>{saving}</Text>}
      {description && (
        <Text size="sm" c="dimmed" my="sm">
          {description}
        </Text>
      )}
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

      <ButtonComponent variant={planName === "SOLOPRENEUR PLAN" ? "primary" : "secondary"}>
        <Group gap={8} justify="center">
          <IconBolt size={18} />
          <Text size="md">{buttonText}</Text>
        </Group>
      </ButtonComponent>

      <Text size="xs" c="dimmed" mt="sm" className={classes.footer}>
        * All prices are subject to applicable taxes.
      </Text>
    </Card>
  );
};

export default PlanCard;
