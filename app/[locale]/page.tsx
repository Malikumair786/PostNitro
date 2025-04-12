"use client";
import React from "react";
import { Badge, Container, Overlay, Text, Title } from "@mantine/core";
import classes from "./page.module.css";
import ButtonComponent from "../../components/Buttons/buttons";
import { IconArrowRight } from "@tabler/icons-react";
import VisualElements from "../../components/VisualElements/VisualElements";
import { useTranslations } from "next-intl";

const Page = ()=> {
  const t = useTranslations("HomePage");

  return (
    <>
      <div className={classes.wrapper}>
        <Overlay opacity={0} zIndex={0} />

        <div className={classes.badgeParent}>
          <Badge className={classes.badge} variant="dot">
            {t("badge")}
          </Badge>
        </div>
        <div className={classes.inner}>
          <Title className={classes.title}>{t("heading")}</Title>
          <Container>
            <Text c="dimmed" size="md" className={classes.description}>
              {t("description")}
            </Text>
          </Container>
          <VisualElements />
          <div className={classes.controls}>
            <ButtonComponent variant="primary">
              {t("startCarouselBtn")} <IconArrowRight />
            </ButtonComponent>
          </div>
          <Text c="dimmed" size="sm" className={classes.creditCard}>
            <span className={classes.checkmark}>✓</span> {t("creditcardtxt")}
          </Text>
        </div>
      </div>
    </>
  );
}

export default Page;
