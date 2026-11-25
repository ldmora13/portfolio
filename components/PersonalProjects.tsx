'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const independentProjects = [
  {
    id: 'jerseys-colombia',
    company: 'Jerseys Colombia',
    role: 'Independent Full-Stack Developer',
    period: 'Apr 2025 - Dec 2025',
    location: 'Colombia',
    summary:
      'Designed and developed a full-stack e-commerce platform for sports jerseys, independently managing the entire development lifecycle, from database architecture and payment integrations to production deployment and technical SEO.',
    projects: [
      {
        id: 'jerseys-colombia-platform',
        name: 'Jerseys Colombia',
        period: 'Apr 2025 - Dec 2025',
        description:
          'A full-stack e-commerce platform for browsing, customizing and purchasing jerseys from various leagues and competitions',
        technologies: [
          'React',
          'Vite',
          'Tailwind CSS',
          'Supabase',
          'PostgreSQL',
          'PayPal',
          'Wompi',
          'Vercel',
        ],
        details: [
          {
            label: 'Platform',
            description:
              'Built a React 19 and Vite storefront using Tailwind CSS, React Router and Supabase (PostgreSQL, Auth and Storage). Implemented a searchable, filterable and paginated product catalog, dynamic product pages, wishlists, and a shopping cart that merges guest localStorage data with user-specific records upon authentication.',
          },
          {
            label: 'Commerce',
            description:
              'Developed a complete checkout flow with customer validation, discount codes, tiered shipping and dual payment gateways: PayPal (USD) and Wompi (COP, supporting Bancolombia, Nequi and QR payments). Implemented Supabase Edge Functions to manage pending orders and payment integrity signatures. Added jersey customization with names, numbers and competition patches, as well as order history and shipment tracking.',
          },
          {
            label: 'Production',
            description:
              'Deployed the platform to Vercel and implemented dynamic sitemap and robots.txt generation from Supabase, SEO metadata, Open Graph tags, Product JSON-LD and crawler prerendering. Configured security and caching headers, integrated Google Tag Manager, and developed email and Google authentication, customer profiles and a support-ticket system.',
          },
        ],
      },
    ],
  },
  {
    id: 'stack-ui',
    company: 'Stack UI',
    role: 'Independent Frontend Developer',
    period: 'Sep 2026 - Present',
    location: 'Colombia',

    summary:
      'Building Stack UI, a curated discovery platform for frontend developers, bringing together UI libraries, reusable components, AI-powered development tools, design resources and open-source projects in one place.',

    projects: [
      {
        id: 'stack-ui-platform',
        name: 'Frontend Stack',
        period: 'Sep 2026 - Present',
        status: 'In Development',

        description:
          'A curated collection of components and design resources for developers and designers. Easily explore, customize, and integrate them into your projects.',
        technologies: [
          'Next.js',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Motion',
          'GSAP',
          'Three.js',
          'React Three Fiber',
          'Lucide',
        ],

        details: [
          {
            label: 'Platform',
            description:
              'Developing a Next.js platform with React and TypeScript, featuring a cohesive dark design system, interactive navigation, dedicated resource categories and an intuitive discovery experience with animated interfaces and dynamic interactions.',
          },
          {
            label: 'Components & Motion',
            description:
              'Designing and developing a collection of reusable UI components and interactive visual experiences, combining Motion, GSAP and Three.js for advanced animations, transitions, pointer interactions and canvas-based effects, with accessibility and reduced-motion support.',
          },
          {
            label: 'Resource Curation',
            description:
              'Curating and organizing a broad ecosystem of frontend resources, including open-source libraries, UI components, coding agents, AI skills, MCP servers, design systems and developer tools. Structuring resources into searchable categories with external references, previews and direct access to their original sources.',
          },
        ],
      },
    ],
  }
];

export default function PersonalProjects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!horizontalRef.current || !trackRef.current) return;

      const horizontal = horizontalRef.current;
      const track = trackRef.current;
      const media = gsap.matchMedia();

      media.add('(prefers-reduced-motion: no-preference)', () => {
        const getDistance = () =>
          Math.max(0, track.scrollWidth - horizontal.clientWidth);

        if (getDistance() === 0) return;

        gsap.set(horizontal, { overflowX: 'hidden' });

        const scrollTween = gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: horizontal,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.utils.toArray<HTMLElement>('.personal-project-panel').forEach((panel) => {
          gsap.fromTo(
            panel.querySelectorAll('.personal-project-reveal'),
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.08,
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: 'left 82%',
                end: 'left 48%',
                scrub: true,
              },
            },
          );
        });

        gsap.to('.personal-project-progress', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: horizontal,
            start: 'top top',
            end: () => `+=${getDistance()}`,
            scrub: true,
          },
        });
      });

      return () => media.revert();
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="personal-projects-title"
      className="overflow-x-clip"
    >
      <header className="mx-auto px-6 pb-10 pt-16 sm:px-10 sm:pb-14 sm:pt-24 bg-foreground text-background w-full border-b border-background/10">
        <h2
          id="personal-projects-title"
          className="text-4xl font-black tracking-[-0.06em] sm:text-6xl"
        >
          Independent Projects
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-background/70 sm:text-lg">
          Products built independently, from the first database table to production.
        </p>
      </header>

      <div
        ref={horizontalRef}
        aria-label="Personal project cards"
        className="relative h-dvh w-full snap-x snap-mandatory overflow-x-auto bg-foreground text-background"
        role="region"
        tabIndex={0}
      >
        <div
          ref={trackRef}
          className="flex h-full w-max items-stretch will-change-transform"
        >
          {independentProjects.map((experience) =>
            experience.projects.map((project) => (
              <article
                key={`${experience.id}-${project.id}`}
                className="personal-project-panel flex h-full w-screen shrink-0 snap-start flex-col justify-between overflow-y-auto border-r border-background/20 px-6 py-8 sm:px-10 sm:py-12 lg:px-16"
              >
                <div className="personal-project-reveal flex flex-col justify-between gap-2 font-mono text-xs text-background/65 sm:flex-row sm:items-center sm:text-sm">
                  <span>{project.period}</span>
                </div>

                <div className="mx-auto my-10 w-full max-w-7xl">
                  <div className="personal-project-reveal grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:items-end lg:gap-12">
                    <div>
                      <h3 className="max-w-4xl text-[clamp(3.25rem,8vw,7.5rem)] font-black leading-[0.88] tracking-[-0.07em]">
                        {project.name}
                      </h3>
                      <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/75 sm:text-xl">
                        {project.description}
                      </p>
                    </div>
                    <p className="max-w-xl text-sm leading-relaxed text-background/65 sm:text-base">
                      {experience.summary}
                    </p>
                  </div>

                  <ul
                    aria-label={`${project.name} technologies`}
                    className="personal-project-reveal mt-8 flex flex-wrap gap-2"
                  >
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="border border-background/25 px-3 py-1.5 font-mono text-xs text-background/75"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>

                  <details className="personal-project-reveal mt-8 border-t border-background/20">
                    <summary className="cursor-pointer py-5 font-mono text-xs uppercase tracking-[0.12em] text-background/70">
                      Project details
                    </summary>
                    <dl className="grid gap-6 pb-4 sm:grid-cols-2 lg:grid-cols-3">
                      {project.details.map((detail) => (
                        <div key={detail.label}>
                          <dt className="text-sm font-semibold text-background/90">
                            {detail.label}
                          </dt>
                          <dd className="mt-2 text-sm leading-relaxed text-background/70">
                            {detail.description}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </details>
                </div>

                <p className="personal-project-reveal font-mono text-xs text-background/55">
                  {experience.location}
                </p>
              </article>
            )),
          )}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-background/20">
          <div className="personal-project-progress h-full w-full origin-left scale-x-0 bg-background" />
        </div>
      </div>
    </section>
  );
}
