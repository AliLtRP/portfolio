/* eslint-disable react/no-unescaped-entities */
import About from "@/components/about/About";
import Hero from "@/components/hero_section/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Work from "@/components/work_section/Work";
import {Preahvihear} from "next/font/google";

const font = Preahvihear({
  weight: "400",
  subsets: ['latin']
});

export default function Home() {
  return (
    <main className={font.className +  " w-full min-h-screen h-full bg-[#11071F]"}>
      <div className="flex px-16 h-full flex-col justify-center items-center">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
