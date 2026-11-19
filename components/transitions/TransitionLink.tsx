
"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { usePageTransition } from "./TransitionProvider";

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

export function TransitionLink({
  href,
  onClick,
  target,
  children,
  ...props
}: Props) {
  const { navigate } = usePageTransition();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      !href ||
      target === "_blank" ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    const url = new URL(href, window.location.href);

    // No interceptar enlaces externos ni anclas.
    if (
      url.origin !== window.location.origin ||
      url.hash ||
      url.pathname === window.location.pathname
    ) {
      return;
    }

    event.preventDefault();

    navigate(url.pathname + url.search);
  };

  return (
    <a
      href={href}
      target={target}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
