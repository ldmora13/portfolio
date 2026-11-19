"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import { Menu } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export default function MenuButton() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                className="relative z-40 flex cursor-pointer flex-row items-center gap-1 text-center text-neutral-800 transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current dark:text-neutral-200"
                aria-expanded={isMenuOpen}
                aria-controls="site-navigation"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
                <span className="text-sm font-semibold uppercase sm:text-base">
                    {isMenuOpen ? "Close" : "Menu"}
                </span>
                <Menu className="h-4 w-4" aria-hidden="true" />
            </button>
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                    <motion.div
                        aria-hidden="true"
                        onClick={() => setIsMenuOpen(false)}
                        className="fixed inset-0 z-20 cursor-default bg-neutral-950/20 backdrop-blur-[2px]"
                        initial={shouldReduceMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Site navigation"
                        className="fixed inset-0 z-30 flex w-full flex-col items-stretch justify-center border-neutral-300/70 bg-background/95 px-6 py-24 text-right shadow-2xl shadow-black/10 backdrop-blur-xl dark:border-neutral-700/70 dark:shadow-black/30 sm:inset-y-0 sm:left-auto sm:right-0 sm:w-[min(28rem,calc(100vw-3rem))] sm:border-l sm:px-10"
                        initial={shouldReduceMotion ? false : { x: "100%", opacity: 0.6 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0.6 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.42, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="mb-8 border-b border-current/15 pb-4 text-left text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
                            Navigation
                        </p>
                        <Navbar onNavigate={() => setIsMenuOpen(false)} />
                    </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}