import Hero from "@/components/Hero";
import { CardDemo } from "@/components/ui/card";
import { Experience } from "@/components/Experience";
import Projects from "@/components/Projects";
import { FloatingDockDemo } from "@/components/Navbar";
import { SignupFormDemo } from "@/components/Contact";
import PathVisualizer from "@/components/pathVisualizer";
import PathfindingVisualizer from "@/components/PathfindingVisualizer";

export default function Home() {
  return (
    <div className=" min-h-screen overflow-x-hidden py-8 max-md:py-4 font-[family-name:var(--font-geist-sans)]">
      <main
        id="home"
        className="flex flex-col gap-8 row-start-2 items-center max-w-6xl mx-auto"
      >
        <FloatingDockDemo />
        <Hero />
        <CardDemo />
        <Experience />
        <Projects />
        <div id="contact" className="flex w-full flex-col">
          <div className="py-20 px-4 max-md:py-10">
            <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
              Contact Me
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-lg text-justify">
              I'm always looking for new opportunities to work on exciting
              projects. Whether you have a question or just want to say hi, feel
              free to reach out to me.
            </p>
          </div>
          <div className="flex w-full">
            <SignupFormDemo />
            <PathfindingVisualizer />
          </div>
        </div>
      </main>
    </div>
  );
}
