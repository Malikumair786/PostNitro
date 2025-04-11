import React from "react";
import { Badge, Container, Overlay, Text, Title } from "@mantine/core";
import classes from "./page.module.css";
import ButtonComponent from "../components/Buttons/buttons";
import { IconArrowRight } from "@tabler/icons-react";

const HomePage = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <Overlay opacity={0} zIndex={0} />

        <div className={classes.badgeParent}>
          <Badge className={classes.badge} variant="dot">
            AI-Powered Carousel Generator for Viral Content
          </Badge>
        </div>
        <div className={classes.inner}>
          <Title className={classes.title}>
            AI-Powered Carousel Generator for Instagram, LinkedIn & More
          </Title>
          <Container>
            <Text c="dimmed" size="md" className={classes.description}>
              PostNitro's AI-powered platform creates stunning carousels for
              Instagram, LinkedIn, TikTok, and more. Boost your social media
              engagement with customizable, brand-aligned content generated in
              minutes.
            </Text>
          </Container>
          <div className={classes.controls}>
            <ButtonComponent variant="primary">
              Start Creating Free Carousels <IconArrowRight />
            </ButtonComponent>
          </div>
          <Text c="dimmed" size="sm" className={classes.creditCard}>
            <span className={classes.checkmark}>✓</span> No Credit Card Required
            | Free Downloads Every Month
          </Text>
        </div>
      </div>
    </>
  );
};

export default HomePage;
