import React from "react";
import { Text, Flex } from "@radix-ui/themes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui";
import { CheckIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

const SystemIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    width="14"
    height="14"
  >
    <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 3.5 A8.5 8.5 0 0 1 12 20.5 Z" fill="currentColor" />
    <circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ThemeSelector: React.FC = () => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  const options = [
    { value: "system", label: t("theme.system"), icon: SystemIcon },
    { value: "light", label: t("theme.light"), icon: SunIcon },
    { value: "dark", label: t("theme.dark"), icon: MoonIcon },
  ];

  const currentTheme = theme || "system";
  const currentOption = options.find((opt) => opt.value === currentTheme) || options[0];
  const CurrentIcon = currentOption.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger aria-label={t("theme.system")}>
        <Flex
          align="center"
          gap="1"
          className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <CurrentIcon className="text-foreground" />
          <Text size="2" className="hidden sm:block">
            {currentOption.label}
          </Text>
          <Text size="2" className="sr-only">
            {currentOption.label}
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
              <Flex gap="2" align="center">
                <opt.icon className="text-foreground" />
                <Text size="2">{opt.label}</Text>
              </Flex>
              {currentTheme === opt.value && (
                <CheckIcon width="14" height="14" />
              )}
            </Flex>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSelector;
