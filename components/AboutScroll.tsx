'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const profileCards = [
  {
    index: '01',
    label: 'Role',
    title: 'Full-stack developer',
    detail: 'I build from interface to infrastructure.',
  },
  {
    index: '02',
    label: 'Location',
    title: 'Medellín, Colombia',
    detail: 'Working with teams across borders and time zones.',
  },
  {
    index: '03',
    label: 'Focus',
    title: 'Useful experiences',
    detail: 'Scalable systems, thoughtful interactions, and clear product thinking.',
  },
];

export default function AboutScroll() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion || !horizontalRef.current || !trackRef.current) return;

      const horizontal = horizontalRef.current;
      const track = trackRef.current;

      const scrollTween = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: horizontal,
          start: 'top top',
          end: () => `+=${Math.max(0, track.scrollWidth - window.innerWidth)}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.utils.toArray<HTMLElement>('.about-panel').forEach((panel) => {
        gsap.from(panel.querySelectorAll('.about-reveal'), {
          y: 34,
          opacity: 0,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: panel,
              containerAnimation: scrollTween,
            start: 'left 78%',
            end: 'left 42%',
            scrub: true,
          },
        });
      });

      gsap.to('.about-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: horizontal,
          start: 'top top',
          end: () => `+=${Math.max(0, track.scrollWidth - window.innerWidth)}`,
          scrub: true,
        },
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section ref={sectionRef} className="relative min-h-dvh overflow-hidden">

      <div ref={horizontalRef} className="relative h-dvh w-full overflow-hidden bg-foreground text-background">
        <div
          ref={trackRef}
          className="flex h-full w-max items-stretch will-change-transform"
        >
          {profileCards.map((card) => (
            <article
              key={card.index}
              className="about-panel flex h-full w-[88vw] shrink-0 flex-col justify-between border-r border-background/20 px-6 py-8 sm:w-[70vw] sm:px-12 sm:py-12 lg:w-[52vw]"
            >
              <div className="about-reveal flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em]">
                <span>{card.label}</span>
                <span>{card.index} / 03</span>
              </div>
              <div className="max-w-3xl">
                <h3 className="about-reveal text-[clamp(3.25rem,9vw,8rem)] font-black leading-[0.82] tracking-[-0.07em]">
                  {card.title}
                </h3>
                <p className="about-reveal mt-6 max-w-xl text-base leading-relaxed opacity-70 sm:text-xl">
                  {card.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-background/20">
          <div className="about-progress h-full w-full origin-left scale-x-0 bg-background" />
        </div>
      </div>
    </section>
  );
}
