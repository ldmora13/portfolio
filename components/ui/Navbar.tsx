"use client";

import { motion } from "motion/react";
import React from "react";

import { cn } from "@/lib/utils";

const navigationItems = [
  {
    name: "Home",
    href: "/",
    description: "[0]",
  },
  {
    name: "Components",
    href: "/components",
    description: "[1]",
  },
  {
    name: "Pricing",
    href: "/pricing",
    description: "[2]",
  },
  {
    name: "How to use",
    href: "/docs/quick-start",
    description: "[3]",
  },
  {
    name: "Account",
    href: "/user",
    description: "[4]",
  },
  {
    name: "Login",
    href: "/login",
    description: "[7]",
  },
];

export default function Navbar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ul
      id="site-navigation"
      className="flex w-full flex-col items-stretch justify-center gap-2 text-right"
      aria-label="Primary navigation"
    >
      {navigationItems.map((item) => (
        <li
          className="relative flex w-full flex-col items-end overflow-visible"
          key={item.href}
        >
          <a
            href={item.href}
            onClick={onNavigate}
            className="group flex w-full items-baseline justify-between gap-5 border-b border-current/10 py-3 text-right transition-colors hover:border-current/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
          >
            <TextRoll
              className="text-3xl font-extrabold uppercase leading-[0.9] tracking-[-0.03em] transition-colors group-hover:opacity-60 sm:text-4xl lg:text-5xl"
            >
              {item.name}
            </TextRoll>
            <span className="font-mono text-xs opacity-50 transition-opacity group-hover:opacity-100">
              {item.description}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

const TextRoll: React.FC<{
  children: string;
  className?: string;
}> = ({ children, className }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn(
        "relative inline-block overflow-hidden align-bottom whitespace-nowrap leading-none",
        className,
      )}
    >
      <motion.span
        variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="block"
      >
        {children}
      </motion.span>
      <motion.span
        aria-hidden="true"
        variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 top-0 block"
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

export { TextRoll };
