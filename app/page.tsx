import Hero from "@/components/Hero";
import AboutScroll from "@/components/AboutScroll";
import Stack from "@/components/Stack";


export default function Home() {
  
  return (
    <main className="flex flex-col justify-center">
      <Hero />
      <AboutScroll />
      <Stack />
    </main>
  );
}
