import Hero from "@/components/Hero";
import { CardDemo } from "@/components/ui/card";
import { Experience } from "@/components/Experience";
import Projects from "@/components/Projects";
import { FloatingDockDemo } from "@/components/Navbar";
import { SignupFormDemo } from "@/components/Contact";

export default function Home() {
  return (
    <div className=" min-h-screen overflow-x-hidden p-8  font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-6xl mx-auto">
        <FloatingDockDemo />
        <Hero />
        {/* <Tech /> */}
        <CardDemo />
        <Experience />
        <Projects />

        <SignupFormDemo />
      </main>
    </div>
  );
}
