import { getPortfolioData } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <Hero data={data.hero} />

      <Experience data={data.experience} />

      <Skills data={data.skills} />

      <Achievements data={data.achievements} />

      <Education data={data.education} />

      <Contact data={data.hero} />

      <Footer />
    </main>
  );
}
