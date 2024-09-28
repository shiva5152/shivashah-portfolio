import Hero from "@/components/Hero";
import { CardDemo } from "@/components/ui/card";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <div className=" min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-6xl mx-auto">
        <Hero />
        {/* <Tech /> */}
        <CardDemo />
        <Experience />
      </main>
    </div>
  );
}
