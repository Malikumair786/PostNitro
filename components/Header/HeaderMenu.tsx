"use client";
import { IconChevronDown, IconSparkles } from "@tabler/icons-react";
import { Badge, Burger, Center, Container, Group, Menu } from "@mantine/core";
import { Drawer, ScrollArea, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderMenu.module.css";
import Image from "next/image";
import ButtonComponent from "../Buttons/buttons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LanguageSelector from "./LanguageSelector";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
export default function HeaderMenu() {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const t = useTranslations("HeaderMenu");
  const locale = useLocale();

  const links = [
    {
      link: "",
      label: t("gettingStarted"),
      links: [
        { link: "https://postnitro.ai/docs", label: t("Docs") },
        { link: "https://postnitro.ai/blog", label: t("Blog") },
        { link: "https://ls.postnitro.ai/affiliates", label: t("Affiliate") },
      ],
    },
    {
      link: "",
      label: t("products"),
      links: [
        { link: "/carousels/linkedin", label: t("linkedinCarousel") },
        { link: "/carousels/instagram", label: t("instagramCarousel") },
        { link: "/carousels/tiktok", label: t("tiktokCarousel") },
        { link: "/carousels/x-twitter", label: t("xTwitterCarousel") },
        { link: "/products/embed", label: t("embed") },
        { link: "/products/extension", label: t("extension") },
      ],
    },
    {
      link: "#",
      label: t("freeTools"),
      links: [
        { link: "/free-ai-tool/twitter-free-banner-header-image-maker", label: t("twitterBanner") },
        { link: "/free-ai-tool/linkedin-free-banner-header-image-maker", label: t("linkedinBanner") },
        { link: "/free-ai-tool/instagram-free-image-splitter-grid-maker", label: t("instagramGrid") },
        { link: "/free-ai-tool/linkedin-free-text-formatter", label: t("linkedinFormatter") },
        { link: "/free-ai-tool/linkedin-free-post-generator", label: t("linkedinPostGen") },
      ],
    },
    { link: "/plans", label: t("plans") },
  ];

  const handleNavigate = (path: string) => {
    router.push(`/${locale}${path}`);
  };

  const isExternal = (url: string) => url.startsWith("http://") || url.startsWith("https://");

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => {
      if (isExternal(item.link)) {
        return (
          <Menu.Item key={item.link} component="a" href={item.link}  >
            {item.label}
          </Menu.Item>
        );
      }

      return (
        <Menu.Item key={item.link} component={Link} href={`/${locale}${item.link}`}>
          {item.label}
        </Menu.Item>
      );
    });

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            {isExternal(link.link) ? (
              <a href={link.link} className={classes.link} >
                <Center>
                  <span className={classes.linkLabel}>{link.label}</span>
                  <IconChevronDown size={24} stroke={1.5} />
                </Center>
              </a>
            ) : (
              <Link href={`/${locale}${link.link}`} className={classes.link}>
                <Center>
                  <span className={classes.linkLabel}>{link.label}</span>
                  <IconChevronDown size={24} stroke={1.5} />
                </Center>
              </Link>
            )}
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return isExternal(link.link) ? (
      <a key={link.label} href={link.link} className={classes.link} >
        {link.label}
      </a>
    ) : (
      <Link key={link.label} href={`/${locale}${link.link}`} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <Container size="md" className={classes.left}>
          <div className={classes.innerLeft}>
            <Image src={"/logo-full.svg"} alt="postNotroLogo" width={130} height={50} onClick={() => handleNavigate("/")} className={classes.logo} />
            <Group gap="md" visibleFrom="md" className={classes.navLinks}>
              {items}
            </Group>
            <Group hiddenFrom="md">
              <ButtonComponent variant="primary" onClick={() => handleNavigate("/app/carousel-maker")}>
                <div className={classes.buttonContent}>
                  <IconSparkles size={20} stroke={1.5} />
                  <span>Create</span>
                </div>
              </ButtonComponent>
            </Group>
            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="md" />
          </div>
        </Container>

        <Container size="md" className={classes.right} visibleFrom="md">
          <Group gap="md">
            <LanguageSelector />
            <ButtonComponent variant="secondary" onClick={() => handleNavigate("/app/post-maker")}>
              <div className={classes.buttonContent}>
                <IconSparkles size={20} stroke={1.5} />
                <span>{t("createImagePost")}</span>
                <Badge size="sm" variant="gradient" gradient={{ from: "teal", to: "lime", deg: 0 }}>
                  Beta
                </Badge>
              </div>
            </ButtonComponent>
            <ButtonComponent variant="primary" onClick={() => handleNavigate("/app/carousel-maker")}>
              <div className={classes.buttonContent}>
                <IconSparkles size={20} stroke={1.5} />
                <span>{t("createCarousel")}</span>
              </div>
            </ButtonComponent>
          </Group>
        </Container>
      </div>

      <Drawer
        opened={opened}
        onClose={toggle}
        title={
          <div style={{ display: "flex", justifyContent: "center", width: "full" }}>
            <Image src={"/logo-full.svg"} alt="postNotroLogo" width={130} height={50} />
            <div style={{ margin: "auto", marginLeft: "3rem" }}>
              <LanguageSelector />
            </div>
          </div>
        }
        position="left"
        padding="md"
        size="80%"
        hiddenFrom="md"
        classNames={{ body: classes.drawerBody }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}></div>
        <ScrollArea className={classes.drawerScroll}>
          <div className={classes.drawerContent}>
            {links.map((link, index) => (
              <div key={index} className={classes.drawerSection}>
                <Text className={classes.drawerParent} onClick={() => handleNavigate(`${link.link}`)}>
                  {link.label}
                </Text>
                <div className={classes.drawerChildren}>
                  {link.links?.map((item) => (
                    <Text
                      key={item.link}
                      className={classes.drawerChild}
                      onClick={() => {
                        handleNavigate(item.link);
                        toggle();
                      }}
                    >
                      {item.label}
                    </Text>
                  ))}
                </div>
              </div>
            ))}
            <ButtonComponent
              variant="secondary"
              onClick={() => {
                handleNavigate("/app/post-maker");
                toggle();
              }}
            >
              <div className={classes.buttonContent}>
                <IconSparkles size={20} stroke={1.5} />
                <span>Create Image Post</span>
                <Badge size="sm" variant="gradient" gradient={{ from: "teal", to: "lime", deg: 0 }}>
                  Beta
                </Badge>
              </div>
            </ButtonComponent>
          </div>
        </ScrollArea>
      </Drawer>
    </header>
  );
}
