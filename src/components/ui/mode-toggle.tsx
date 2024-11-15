"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const { theme, setTheme} = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "dark") {
            setTheme("system");
        } else {
            setTheme("light"); // Loop back to light after system
        }
    };

    if (!mounted) return null;

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Toggle theme, current theme is ${theme}`}
        >
            <Sun
                className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "light" ? "visible" : "invisible"
                    }`}
            />
            <Moon
                className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "visible" : "invisible"
                    }`}
            />
            <Laptop
                className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${theme === "system" ? "visible" : "invisible"
                    }`}
            />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
