"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { StyleToggle } from "@/components/ui/style-toggle";
import { useStyleMode } from "@/components/style-mode-provider";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavBar() {
  const { styleMode, mounted } = useStyleMode();

  if (!mounted) {
    return (
      <div className="h-14" aria-hidden />
    );
  }

  if (styleMode === "retro") {
    return (
      <table
        className="retro-nav"
        width="100%"
        cellPadding={4}
        cellSpacing={0}
        border={0}
      >
        <tbody>
          <tr>
            <td className="retro-nav-brand">
              <font size="5">
                <b>
                  <Link href="/" className="retro-brand-link">
                    ★ Manav Hirani ★
                  </Link>
                </b>
              </font>
            </td>
            <td align="right" className="retro-nav-links">
              <font size="2">
                <b>
                  <Link href="/">Home</Link>
                  {" · "}
                  <Link href="/blog">Blog</Link>
                  {" · "}
                  <a href="https://github.com/manavhirani" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </b>
                {"  "}
                <ModeToggle />
                {" "}
                <StyleToggle />
              </font>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <hr className="retro-hr" />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return (
    <nav className="flex items-center justify-between gap-4 py-2">
      <Link href="/" className="text-2xl font-semibold tracking-tight">
        Manav Hirani
      </Link>
      <div className="flex items-center gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <StyleToggle />
        <ModeToggle />
      </div>
    </nav>
  );
}
