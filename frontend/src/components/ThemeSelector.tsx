import React from "react";
import { Text, Flex } from "@radix-ui/themes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui";
import { CheckIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

const ThemeSelector: React.FC = () => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  const options = [
    { value: "system", label: t("theme.system") },
    { value: "light", label: t("theme.light") },
    { value: "dark", label: t("theme.dark") },
  ];

  const currentTheme = theme || "system";
  const currentLabel =
    options.find((opt) => opt.value === currentTheme)?.label ||
    t("theme.system");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Flex
          align="center"
          gap="1"
          className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <Text size="2" className="hidden sm:block">
            {currentLabel}
          </Text>
        </Flex>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {options.map((opt) => (
          <DropdownMenuItem key={opt.value} onClick={() => setTheme(opt.value)}>
            <Flex
              gap="2"
              align="center"
              justify="between"
              style={{ width: "100%" }}
            >
              <Text size="2">{opt.label}</Text>
              {currentTheme === opt.value && <CheckIcon width="14" height="14" />}
            </Flex>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSelector;
