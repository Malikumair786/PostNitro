"use client";
import { IconChevronDown, IconSparkles } from "@tabler/icons-react";
import {
  Badge,
  Burger,
  Center,
  Container,
  Group,
  Menu,
} from "@mantine/core";
import { Drawer, ScrollArea, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderMenu.module.css";
import Image from "next/image";
import ButtonComponent from "../Buttons/buttons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LanguageSelector from "./LanguageSelector";

const links = [
  {
    link: "",
    label: "Getting Started",
    links: [
      { link: "https://postnitro.ai/docs", label: "Docs" },
      { link: "https://postnitro.ai/blog", label: "Blog" },
      { link: "https://ls.postnitro.ai/affiliates", label: "Affiliate" },
    ],
  },
  {
    link: "",
    label: "Products",
    links: [
      { link: "/carousels/linkedin", label: "LinkedIn Carousel Generator" },
      { link: "/carousels/instagram", label: "Instagram Carousel Generator" },
      { link: "/carousels/tiktok", label: "TikTok Carousel Generator" },
      {
        link: "/carousels/x-twitter",
        label: "X (Twitter) Carousel Add Generator",
      },
      { link: "/products/embed", label: "Embed" },
      { link: "/products/extension", label: "Chrome Extention" },
    ],
  },
  {
    link: "free-ai-tools",
    label: "Free Tools",
    links: [
      {
        link: "/free-ai-tool/twitter-free-banner-header-image-maker",
        label: "Twitter Banner & Header Maker",
      },
      {
        link: "/free-ai-tool/linkedin-free-banner-header-image-maker",
        label: "LinkedIn Banner & Header Maker",
      },
      {
        link: "/free-ai-tool/instagram-free-image-splitter-grid-maker",
        label: "Instagram Grid Makers & Image Splitter",
      },
      {
        link: "/free-ai-tool/linkedin-free-text-formatter",
        label: "LinkedIn Text Formatter",
      },
      {
        link: "/free-ai-tool/linkedin-free-post-generator",
        label: "LinkedIn Post generator",
      },
    ],
  },
  { link: "/plans", label: "Plans" },
];

export default function HeaderMenu() {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} component={Link} href={item.link}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <Link href={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={24} stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <Container size="md" className={classes.left}>
          <div className={classes.innerLeft}>
            <Image
              src={"/logo-full.svg"}
              alt="postNotroLogo"
              width={130}
              height={50}
              onClick={()=>handleNavigate("/")}
              className={classes.logo}
            />
            <Group gap="md" visibleFrom="md" className={classes.navLinks} >
              {items}
            </Group>
            <Group hiddenFrom="md">
            <ButtonComponent
              variant="primary"
              onClick={() => handleNavigate("/app/carousel-maker")}
              >
              <div className={classes.buttonContent}>
                <IconSparkles size={20} stroke={1.5} />
                <span>Create</span>
              </div>
            </ButtonComponent>
              </Group>            
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="md"
            />
          </div>
        </Container>

        <Container size="md" className={classes.right} visibleFrom="md">
          <Group gap="md">
            <LanguageSelector />
            <ButtonComponent
              variant="secondary"
              onClick={() => handleNavigate("/app/post-maker")}
            >
              <div className={classes.buttonContent}>
                <IconSparkles size={20} stroke={1.5} />
                <span>Create Image Post</span>
                <Badge
                  size="sm"
                  variant="gradient"
                  gradient={{ from: "teal", to: "lime", deg: 0 }}
                >
                  Beta
                </Badge>
              </div>
            </ButtonComponent>
            <ButtonComponent
              variant="primary"
              onClick={() => handleNavigate("/app/carousel-maker")}
            >
              <div className={classes.buttonContent}>
                <IconSparkles size={20} stroke={1.5} />
                <span>Create Carousels</span>
              </div>
            </ButtonComponent>
          </Group>
        </Container>
      </div>

      <Drawer
        opened={opened}
        onClose={toggle}
        title={
          <div
            style={{ display: "flex", justifyContent: "center", width: "full" }}
          >
            <Image
              src={"/logo-full.svg"}
              alt="postNotroLogo"
              width={130}
              height={50}
            />
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
                <Text
                  className={classes.drawerParent}
                  onClick={() => handleNavigate(`${link.link}`)}
                >
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
                <Badge
                  size="sm"
                  variant="gradient"
                  gradient={{ from: "teal", to: "lime", deg: 0 }}
                >
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
