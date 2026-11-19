
"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const mounted = useSyncExternalStore(
        () => () => {},
        () => true,
        () => false,
    );

    if (!mounted) {
        return (
            <div className="h-[30px] w-[60px] rounded-[15px]" />
        );
    }

    const isDark = theme === "dark";

    return (
        <label className="inline-flex cursor-pointer items-center">
            <div className="relative isolate h-[30px] w-[60px] overflow-hidden rounded-[15px]
                shadow-[-8px_-4px_8px_0px_#ffffff,8px_4px_12px_0px_#d1d9e6,4px_4px_4px_0px_#d1d9e6_inset,-4px_-4px_4px_0px_#ffffff_inset]
                dark:shadow-[-8px_-4px_8px_0px_rgb(50,50,50),8px_4px_12px_0px_rgb(25,25,25),4px_4px_4px_0px_rgb(25,25,25)_inset,-4px_-4px_4px_0px_rgb(50,50,50)_inset]">

                <input
                    type="checkbox"
                    checked={isDark}
                    onChange={(e) =>
                        setTheme(e.target.checked ? "dark" : "light")
                    }
                    className="peer hidden"
                />

                <div className="h-full w-[200%] -translate-x-[75%] rounded-[15px]
                    bg-[#ecf0f3] dark:bg-[#262626]
                    shadow-[-8px_-4px_8px_0px_#ffffff,8px_4px_12px_0px_#d1d9e6]
                    dark:shadow-[-8px_-4px_8px_0px_rgb(25,25,25),8px_4px_12px_0px_rgb(25,25,25)]
                    transition-transform duration-[400ms]
                    ease-[cubic-bezier(0.85,0.05,0.18,1.35)]
                    peer-checked:translate-x-[25%]">
                </div>
            </div>
        </label>
    );
}
