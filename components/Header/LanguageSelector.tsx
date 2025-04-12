"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Button, Menu } from "@mantine/core";
import Image from "next/image";
import { setLanguage } from "../../redux/languageSlice";
import classes from "./HeaderMenu.module.css";

import { useRouter, usePathname } from "../../i18n/routing";
import { Locale } from "../../i18n/routing";

const languageOptions = [
  { code: "GB-UKM - United Kingdom", label: "English", value: "en" },
  { code: "CN - China", label: "China", value: "zh" },
  { code: "ES - Spain", label: "Español", value: "es" },
  { code: "FR - France", label: "Français", value: "fr" },
];

const LanguageSelector = () => {
  const selectedLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  const [isHydrated, setIsHydrated] = useState(false);
  const dispatch = useDispatch();

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsHydrated(true);

    if (!selectedLanguage) {
      dispatch(setLanguage("en"));
    }
  }, [dispatch, selectedLanguage]);

  if (!isHydrated) {
    return <div className={classes.flagTemplate} />;
  }

  const handleLanguageChange = (lang: (typeof languageOptions)[0]) => {
    const locale = lang.value as Locale;

    dispatch(setLanguage(locale));

    // ✅ Use next-intl's locale routing to replace current route with new locale
    router.replace(pathname, { locale });
  };

  return (
    <div>
      <Menu withArrow position="bottom-start">
        {selectedLanguage && (
          <Menu.Target>
            <Button variant="transparent" className={classes.button}>
              <Image
                src={`/flags/${
                  languageOptions.find((l) => l.value === selectedLanguage)
                    ?.code
                }.svg`}
                alt={
                  languageOptions.find((l) => l.value === selectedLanguage)
                    ?.label || "Flag"
                }
                width={44}
                height={32}
                className={classes.flag}
              />
            </Button>
          </Menu.Target>
        )}

        <Menu.Dropdown>
          {languageOptions.map((language) => (
            <Menu.Item
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className={classes.menuItems}
            >
              <div className={classes.menuItem}>
                <Image
                  src={`/flags/${language.code}.svg`}
                  alt={language.label}
                  width={24}
                  height={16}
                  className={classes.flagItem}
                />
                <span className={classes.label}>{language.label}</span>
              </div>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default LanguageSelector;
