import { Rating, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import classes from "./VisualElements.module.css";
import { useTranslations } from "next-intl";

const VisualElements = () => {
  const t = useTranslations('VisualElements');

  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <Image
          src={"/user-collected.webp"}
          alt="users avatars"
          width={200}
          height={40}
        />
        <div className={classes.firstTextBlock}>
          <div className={classes.ratingWrapper}>
            <Rating defaultValue={5} />
            <div className={classes.ratingValue}>5.0</div>
          </div>
          <Text c="dimmed" className={classes.subText}>{t('joinCreators')}</Text>
        </div>
      </div>

      <div className={classes.divider} />

      <div className={classes.section}>
        <div className={classes.secondTextBlock}>
          <Text className={classes.ratingValue}>{t('embeddedInto')}</Text>
          <Text c="dimmed" className={classes.subText}>{t('platforms')}</Text>
        </div>
        <Image
          src={"/embed-collected.png"}
          alt="embedded platforms"
          width={200}
          height={40}
        />
      </div>
    </div>
  );
};

export default VisualElements;
