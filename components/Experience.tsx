'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 'compila',
    company: 'Compila',
    role: 'Junior Full-Stack Developer',
    period: 'Feb 2026 - Present',
    location: 'Bogotá, Colombia · Remote',

    summary:
      'Contributed to the development of multiple web platforms and digital products for clients across different industries, working across frontend, backend, database architecture, third-party integrations and production deployment.',

    projects: [
      {
        id: 'cortiglow',
        name: 'CortiGlow',
        period: 'Oct 2026 - Present',
        description:
          'Commerce and operations management platform for a lighting and curtains business.',
        technologies: [
          'Astro',
          'React',
          'Express',
          'Prisma',
          'PostgreSQL',
        ],
        details: [
          {
            label: 'Platform',
            description:
              'Developed three independent apps in one repository: an SEO-focused Astro catalog, a React and Vite admin panel, and an Express, Prisma and PostgreSQL API organized in controllers, services and repositories.',
          },
          {
            label: 'Operations',
            description:
              'Implemented multi-warehouse inventory with stock movements, customers, orders, payments and quotes. Curtain quotes calculate square meters, fabric and finish pricing, and a daily cron job expires outdated quotes; sensitive changes are recorded in an audit log.',
          },
          {
            label: 'Media & Delivery',
            description:
              'Integrated Cloudflare R2 through the S3 SDK for product images with immutable caching, JWT authentication with admin and editor roles, cached dashboard endpoints, Excel exports and GSAP-driven catalog animations.',
          },
        ],
      },
      {
        id: 'auth-bio',
        name: 'Confidential',
        period: 'Jul 2026 - Nov 2026',
        description:
          'Biometric identity-verification platform.',
        technologies: [
          'React',
          'TypeScript',
          'Express',
          'Prisma',
        ],
        details: [
          {
            label: 'Platform',
            description:
              'Developed a three-app monorepo: an Express, TypeScript and Prisma API; a React back-office for admins and advisors; and a public React portal where clients complete biometric enrollment. Modeled the Admin → Advisor → Client hierarchy with role-based access control, audit logging and dashboard KPIs per company and advisor.',
          },
          {
            label: 'Biometrics',
            description:
              'Implemented document-based identity verification and a guided fingerprint, facial and iris enrollment flow with tokenized email links, attempt limits and signed completion checks. Generated enrollment PDFs from templates and delivered confirmation emails over SMTP.',
          },
          {
            label: 'Security & Integrations',
            description:
              'Added Argon2 password hashing, Lucia httpOnly sessions, rate limiting and Zod validation, plus Cloudflare R2 storage for company logos and profile photos. Documented the API with Swagger/OpenAPI and centralized onboarding and notification emails with Nodemailer.',
          },
        ],
      },
      {
        id: 'diener-law',
        name: 'Diener Law Abogados',
        period: 'Sep 2026 - Oct 2026',
        description:
          'Bilingual marketing website for a US immigration law firm.',
        technologies: [
          'Astro',
          'React',
          'Tailwind CSS',
          'GSAP',
        ],
        details: [
          {
            label: 'Bilingual Architecture',
            description:
              'Built mirrored Spanish and English routes with correct lang, hreflang and canonical tags, a centralized translation layer, and an animated language transition that degrades gracefully without JavaScript or reduced motion.',
          },
          {
            label: 'Performance & UI',
            description:
              'Used Astro static prerendering with React only for the appointment modal, consultation form and FAQ, a Tailwind v4 design system, and GSAP scroll animations that respect prefers-reduced-motion.',
          },
          {
            label: 'SEO & Conversion',
            description:
              'Implemented JSON-LD (Attorney, WebSite, FAQPage, BreadcrumbList), sitemap generation, robots.txt with AI crawler access and llms.txt. Added a global appointment modal with focus trap, an accessible form validated with Zod, WhatsApp and call CTAs, and Google Analytics 4.',
          },
        ],
      },
      {
        id: 'new-horizons',
        name: 'New Horizons Immigration Law',
        period: 'Feb 2026 - May 2026',
        description:
          'Immigration legal case management platform.',
        technologies: [
          'Node.js',
          'Express',
          'React',
          'PostgreSQL',
        ],
        details: [
          {
            label: 'Platform',
            description:
              'Built a monorepo-based system featuring a REST API, client portal, and marketing website using Node.js, Express, React, and PostgreSQL.',
          },
          {
            label: 'Integrations',
            description:
              'Integrated PayPal SDK, AWS S3, and Resend to centralize payment processing, file storage, and email notifications.',
          },
          {
            label: 'Production',
            description:
              'Deployed all three services using Docker and Coolify. Implemented technical SEO optimizations and Cloudflare to improve organic visibility and performance.',
          },
        ],
      },
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.experience-heading',
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.experience-heading',
              start: 'top 82%',
              end: 'top 58%',
              scrub: 0.7,
            },
          },
        );

        gsap.utils.toArray<HTMLElement>('.experience-card').forEach((card) => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 0.7,
            },
          });

          timeline
            .fromTo(
              card,
              { x: 88, opacity: 0 },
              { x: 0, opacity: 1, duration: 1, ease: 'none' }
            )
            .fromTo(
              card.querySelectorAll('.experience-detail'),
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: 'none' },
              0.15
            );
        });

        gsap.utils.toArray<HTMLElement>('.experience-project').forEach((project) => {
          gsap.fromTo(
            project,
            { x: 40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: project,
                start: 'top 88%',
                end: 'top 68%',
                scrub: 0.6,
              },
            }
          );
        });
      });

      return () => media.revert();
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="experience-title"
      className="overflow-x-clip border-t border-foreground/10 px-6 py-16 sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <header className="experience-heading mb-10 sm:mb-14">
          <h2
            id="experience-title"
            className="text-4xl font-black tracking-[-0.06em] sm:text-6xl"
          >
            Professional Experience
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            Complete products, from architecture through to deployment.
          </p>
        </header>

        <div className="grid gap-6">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="experience-card border border-foreground/20 bg-background p-6 sm:p-8 lg:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
                <div className="experience-detail">
                  <p className="font-mono text-xs text-foreground/65 sm:text-sm">
                    {experience.company} <span aria-hidden="true">/</span> {experience.period}
                  </p>
                  <h3 className="mt-5 max-w-xl text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[0.94] tracking-[-0.06em]">
                    {experience.role}
                  </h3>
                  <p className="mt-4 text-sm text-foreground/65 sm:text-base">
                    {experience.location}
                  </p>
                </div>

                <div className="experience-detail flex items-center">
                  <p className="max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                    {experience.summary}
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-foreground/15 pt-8">
                <h4 className="mb-5 font-mono text-xs uppercase tracking-[0.12em] text-foreground/60">
                  Selected projects
                </h4>
                <div className="grid gap-4 xl:grid-cols-2">
                  {experience.projects.map((project) => (
                    <article
                      key={project.id}
                      className="experience-project border border-foreground/15 p-5 sm:p-6"
                    >
                      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                        <h5 className="text-xl font-bold tracking-tight sm:text-2xl">
                          {project.name}
                        </h5>
                        <p className="font-mono text-xs text-foreground/60">
                          {project.period}
                        </p>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/75 sm:text-base">
                        {project.description}
                      </p>

                      <ul
                        aria-label={`${project.name} technologies`}
                        className="mt-4 flex flex-wrap gap-2"
                      >
                        {project.technologies.map((technology) => (
                          <li
                            key={technology}
                            className="border border-foreground/20 px-2 py-1 font-mono text-[11px] text-foreground/70"
                          >
                            {technology}
                          </li>
                        ))}
                      </ul>

                      <details className="mt-5 border-t border-foreground/15">
                        <summary className="cursor-pointer py-4 font-mono text-xs uppercase tracking-[0.12em] text-foreground/65">
                          Project details
                        </summary>
                        <dl className="grid gap-5 pb-2 sm:grid-cols-2">
                          {project.details.map((detail) => (
                            <div key={detail.label}>
                              <dt className="text-sm font-semibold text-foreground/85">
                                {detail.label}
                              </dt>
                              <dd className="mt-2 text-sm leading-relaxed text-foreground/70">
                                {detail.description}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </details>
                    </article>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
