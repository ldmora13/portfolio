
import MenuButton from "@/components/Menu";
import TextHero from "@/components/TextHero";
import TextMorph from "@/components/TextMorph";
import Particles from "@/components/Particles";

import FancyButton from "@/components/FancyButton";

export default function Home() {
  
  return (
    <main className="relative min-h-[100dvh] w-full overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Particles
          particleColors={["#ffffff", "#ffffff", "#ffffff"]}
          particleCount={180}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={80}
          glow={0.35}
          twinkle={0.25}
          moveParticlesOnHover
          hoverEffect="parallax"
          sizeRandomness={1}
          shape="circle"
          depthOfField={0}
          connections={false}
          connectionDistance={110}
          particleHoverFactor={1}
          hoverRadius={140}
          drift="none"
          driftSpeed={1}
          variation={0}
          opacity={0.8}
          clickBurst
          intro
          lightMode
        />
      </div>

      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 pt-6 text-center sm:px-10 sm:pt-8">
        <div className="flex flex-col items-start gap-4 text-left">
          <FancyButton href="/contact">
            Contact Me
          </FancyButton>
        </div>
        <MenuButton />
      </header>

      <section className="relative z-10 flex flex-col min-h-[100dvh] items-center justify-center">
        <div className="h-[clamp(220px,42vh,420px)] w-full max-w-5xl">
          <TextHero
            text="MORA"
            letterSpacing={0.1}
            fontWeight={700}
            fontSize={500}
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            intro="none"
            introDuration={2}
            clickKick
            guides={false}
            fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
            accentColor="currentColor"
            reach={200}
            softness={0.7}
            lineStyle="dashed"
            strokeWidth={1.5}
            speed={1}
            bounce={0.4}
            selection
            labels
            color="currentColor"
            align="center"
            draggable
            sweep
          />
        </div>
        <div className="text-center text-lg font-semibold sm:text-xl">
            <TextMorph
              words={["Engineer", "Developer", "Designer"]}
              interval={2500}
              className="text-neutral-800 text-4xl dark:text-neutral-200"
            />
          </div>
      </section>

      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-4 pt-6 pb-5 text-center sm:px-10 sm:pt-8">
        <p className="text-sm font-semibold leading-tight sm:text-base mt-px">LUIS DAVID MORA</p>
        <div className="flex items-center gap-x-2 text-left">
          <a href="" className="text-sm font-semibold uppercase sm:text-base">
            LinkedIn
          </a>
          <span>/</span>
          <a href="" className="text-sm font-semibold uppercase sm:text-base">
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
