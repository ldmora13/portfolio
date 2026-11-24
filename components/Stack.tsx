
'use client';

import { useRef, type Key } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import LogoLoop, { type LogoItem } from '@/components/ui/LogoLoop';

import ResizeHandle from '@/components/ui/text/TextHandle';

import { SiReact, SiNextdotjs, SiAngular, SiAstro, SiTypescript, SiTailwindcss, SiGsap, SiFramer, SiThreedotjs, } from 'react-icons/si';
import { SiNodedotjs, SiExpress, SiNestjs, SiPython, SiPrisma, SiSupabase } from 'react-icons/si';
import { SiDocker, SiGithub, SiGit, SiCoolify } from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const FrontendLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev", hoverColor: "#61dafb" },
  { node: <SiAstro />, title: "Astro", href: "https://astro.build", hoverColor: "#ff5a1f" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org", hoverColor: "#3178c6" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com", hoverColor: "#38bdf8" },
  { node: <SiAngular />, title: "Angular", href: "https://angular.io", hoverColor: "#dd0031" },
  { node: <SiGsap />, title: "GSAP", href: "https://greensock.com/gsap/", hoverColor: "#88ce02" },
  { node: <SiFramer />, title: "Framer Motion", href: "https://www.framer.com/motion/", hoverColor: "#0055ff" },
  { node: <SiThreedotjs />, title: "Three.js", href: "https://threejs.org/", hoverColor: "#000000" },
];

const BackendLogos = [
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org", hoverColor: "#339933" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com", hoverColor: "#000000" },
  { node: <SiNestjs />, title: "NestJS", href: "https://nestjs.com", hoverColor: "#e0234e" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org", hoverColor: "#3776ab" },
  { node: <FaJava />, title: "Java", href: "https://www.java.com", hoverColor: "#007396" },
  { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io", hoverColor: "#0c344b" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com", hoverColor: "#3fcf8e" },
]

const DevOpsLogos = [
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com", hoverColor: "#2496ed" },
    { node: <FaAws />, title: "AWS", href: "https://aws.amazon.com", hoverColor: "#ff9900" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com", hoverColor: "#181717" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com", hoverColor: "#f05032" },
    { node: <SiCoolify />, title: "Coolify", href: "https://coolify.io", hoverColor: "#000000" },
]

const renderStackLogo = (item: LogoItem, key: Key) => {
    if (!('node' in item)) return null;

    return (
        <span
            key={key}
            className="flex h-14 w-14 items-center justify-center text-[48px] transition-transform duration-300 ease-out motion-reduce:transition-none group-hover/item:scale-110 group-focus-within/item:scale-110 group-data-active/item:scale-110 [&>svg]:h-[0.9em] [&>svg]:w-[0.9em]"
        >
            {item.node}
        </span>
    );
};

export default function Stack() {
    const sectionRef = useRef<HTMLElement | null>(null);

    useGSAP(
        () => {
            const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (reducedMotion) return;

            gsap.from('.stack-title', {
                y: 28,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.stack-title',
                    start: 'top 82%',
                    once: true,
                },
            });

            gsap.utils.toArray<HTMLElement>('.stack-row').forEach((row) => {
                gsap.from(row.querySelectorAll('.stack-reveal'), {
                    y: 22,
                    opacity: 0,
                    scale: 0.975,
                    duration: 0.65,
                    stagger: 0.08,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: row,
                        start: 'top 82%',
                        once: true,
                    },
                });
            });
        },
        { scope: sectionRef, dependencies: [] }
    );

    return (
        <section ref={sectionRef} className="min-h-dvh border-t border-foreground/10 py-16 sm:py-24">
            <div className="stack-title mb-12 text-center sm:mb-16">
                <div className="text-4xl font-bold">
                    The Stack Behind <br /> What I
                    <ResizeHandle />
                </div>
            </div>
            <div className="flex flex-col justify-center overflow-hidden items-center">
                <div className="stack-row flex w-full flex-col items-center border-b border-foreground/10 py-8 sm:py-10">
                    <div className="stack-reveal mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]">
                        <p className="font-bold">Frontend</p>
                    </div>
                    <div className="stack-reveal w-full">
                        <LogoLoop
                            layout="line"
                            logos={FrontendLogos}
                            direction="left"
                            speed={36}
                            logoHeight={56}
                            gap={72}
                            pauseOnHover
                            labels="hover"
                            scaleOnHover
                            ariaLabel="Frontend Stack"
                            draggable
                            intro
                            renderItem={renderStackLogo}
                        />
                    </div>
                </div>
                <div className="stack-row flex w-full flex-col items-center border-b border-foreground/10 py-8 sm:py-10">
                    <div className="stack-reveal mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]">
                        <p className="font-bold">Backend</p>
                    </div>
                    <div className="stack-reveal w-full">
                        <LogoLoop
                            logos={BackendLogos}
                            direction="right"
                            speed={36}
                            logoHeight={56}
                            gap={72}
                            pauseOnHover
                            labels="hover"
                            scaleOnHover
                            ariaLabel="Backend Stack"
                            draggable
                            intro
                            renderItem={renderStackLogo}
                        />
                    </div>
                </div>

                <div className="stack-row flex w-full flex-col items-center border-b border-foreground/10 py-8 sm:py-10">
                    <div className="stack-reveal mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]">
                        <p className="font-bold">DevOps</p>
                    </div>
                    <div className="stack-reveal w-full">
                        <LogoLoop logos={DevOpsLogos}
                            speed={36}
                            direction="left"
                            layout="line"
                            logoHeight={56}
                            gap={72}
                            pauseOnHover
                            labels="hover"
                            scaleOnHover
                            fadeOut
                            fadeOutWidth={0.12}
                            scrollBoost={0}
                            step={false}
                            draggable
                            intro
                            renderItem={renderStackLogo}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}