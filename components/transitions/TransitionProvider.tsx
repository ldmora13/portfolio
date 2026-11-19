
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { usePathname, useRouter } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";

type TransitionContextType = {
  navigate: (href: string) => void;
};

const TransitionContext =
  createContext<TransitionContextType | null>(null);

export function usePageTransition() {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error(
      "usePageTransition must be used inside TransitionProvider"
    );
  }

  return context;
}

type Props = {
  children: ReactNode;
};

export function TransitionProvider({ children }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const [phase, setPhase] = useState<
    "idle" | "cover" | "waiting" | "reveal"
  >("idle");

  const destination = useRef("");
  const previousPath = useRef(pathname);

  const navigate = useCallback(
    (href: string) => {
      if (phase !== "idle") return;

      if (shouldReduceMotion) {
        router.push(href);
        return;
      }

      destination.current = href;
      previousPath.current = pathname;

      setPhase("cover");
    },
    [phase, pathname, router, shouldReduceMotion]
  );

  // Esperar a que Next.js complete el cambio de ruta.
  useEffect(() => {
    if (
      phase === "waiting" &&
      pathname !== previousPath.current
    ) {
      window.scrollTo({ top: 0, behavior: "instant" });
      setPhase("reveal");
    }
  }, [pathname, phase]);

  const handleCoverComplete = () => {
    if (phase !== "cover") return;

    setPhase("waiting");
    router.push(destination.current);
  };

  const handleRevealComplete = () => {
    if (phase === "reveal") {
      setPhase("idle");
    }
  };

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}

      {phase !== "idle" && (
        <div
          className="page-transition"
          aria-hidden="true"
        >
          {/* Fondo oscuro */}
          <motion.div
            className="transition-backdrop"
            animate={{
              opacity:
                phase === "cover" || phase === "waiting"
                  ? 0.35
                  : 0,
            }}
            transition={{
              duration: phase === "reveal" ? 0.45 : 0.5,
              ease: "easeInOut",
            }}
          />

          {/* Panel de transición */}
          <motion.div
            className="transition-panel"
            initial={{
              width: "84vw",
              height: "13vh",
              borderRadius: 14,
            }}
            animate={{
              width: "100vw",
              height: "100dvh",
              borderRadius: 0,
              opacity: phase === "reveal" ? 0 : 1,
            }}
            transition={{
              width: {
                duration: 0.85,
                ease: [0.76, 0, 0.24, 1],
              },
              height: {
                duration: 0.85,
                ease: [0.76, 0, 0.24, 1],
              },
              borderRadius: {
                duration: 0.65,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.4,
                ease: "easeOut",
              },
            }}
            onAnimationComplete={() => {
              if (phase === "cover") {
                handleCoverComplete();
              }

              if (phase === "reveal") {
                handleRevealComplete();
              }
            }}
          />
        </div>
      )}
    </TransitionContext.Provider>
  );
}
