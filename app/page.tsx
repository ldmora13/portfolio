import Hero from "@/components/Hero";
import AboutScroll from "@/components/AboutScroll";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import PersonalProjects from "@/components/PersonalProjects";


export default function Home() {
  
  return (
    <main className="flex flex-col justify-center">
      <Hero />
      <AboutScroll />
      <Stack />
      <Experience />
      <PersonalProjects />
    </main>
  );
}
