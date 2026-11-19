import Hero from "@/components/Hero";
import AboutScroll from "@/components/AboutScroll";


export default function Home() {
  
  return (
    <main className="flex flex-col justify-center">
      <Hero />
      <AboutScroll />
    </main>
  );
}
