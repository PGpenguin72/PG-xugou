import { ReactNode } from "react";
import { Box, Flex, Text, Container, Theme } from "@radix-ui/themes";
import { Separator, Toaster } from "./ui";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const currentYear = new Date().getFullYear();
  const { t, i18n } = useTranslation();
  const isZhTW = i18n.language?.startsWith("zh-TW");
  const { resolvedTheme } = useTheme();
  const appearance = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <Theme appearance={appearance}>
      <Flex direction="column" className="min-h-[100vh]">
        {/* 顶部导航栏 */}
        <Navbar />

        {/* 主要内容 */}
        <Box className="grow px-2">{children}</Box>

        {/* 页脚 */}
        <Box>
          <Container>
            <Separator color="gray" />
            <Flex justify="center" align="center" py="3" direction="column">
              <Text size="2" color="gray">
                {t("footer.copyright", { year: currentYear })}
                {isZhTW && (
                  <>
                    {" "}
                    繁體中文翻譯提供者：
                    <a
                      href="https://pg72.tw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[color:var(--accent-9)] hover:underline"
                    >
                      PGpenguin72
                    </a>
                  </>
                )}
              </Text>
            </Flex>
          </Container>
        </Box>
        <Toaster />
      </Flex>
    </Theme>
  );
};

export default Layout;
