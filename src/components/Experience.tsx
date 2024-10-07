import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Lens } from "@/components/ui/lens";

export function Experience() {
  const data = [
    {
      title: "Full Stack Developer",
      date: "July 2023 - Present",
      image: "/metageeks_logo.png",
      company: "Metageeks.tech",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Interacting with clients to gather{" "}
            <strong> functional and non-functional requirements</strong> .
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <strong>Leading the team</strong> and{" "}
            <strong>handling the entire product lifecycle</strong> from design
            to deployment on EC2, Amplify, or Vercel.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <strong> Conducting technical interviews</strong> for potential
            candidates.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <strong>Collaborating </strong> with Web3, Python, and other domain
            developers as needed to build the product within the timeline.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Adapting <strong>Jira/Scrum methodology</strong> for an enhanced
            product-building experience.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Lens>
              <Image
                src="/metageeks-work/slack.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg aspect-video object-cover object-left h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Lens>
            <Lens>
              <Image
                src="/metageeks-work/jira.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg aspect-video object-left object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Lens>

            <Lens>
              <Image
                src="/metageeks-work/montage.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg aspect-video object-cover object-left h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Lens>
            <Lens>
              <Image
                src="/metageeks-work/cyberlevels.png"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg aspect-video object-cover object-left h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Lens>
          </div>
        </div>
      ),
    },
    {
      title: "Full Stack Trainee",
      date: "May 2023 - May 2023",
      image: "/metageeks_logo.png",
      company: "Metageeks.tech",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Developed a <strong>Data Management Application</strong> for
            uploading Excel data to a database and managing it through the
            application.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Learned about the <strong>MERN stack</strong> and got familiar with
            <strong>real world project development</strong>.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Got familiar with the <strong>Agile workflow</strong> and worked in
            a <strong>team environment</strong>.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Designed a <strong>responsive user interface</strong> for a seamless
            user experience.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Lens>
              <Image
                src="/metageeks-work/bot-site.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg aspect-video object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Lens>

            <Lens>
              <Image
                src="/metageeks-work/workspace.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg aspect-video object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Lens>

            <Lens>
              <Image
                src="/metageeks-work/workspace.png"
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg aspect-video object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Lens>
            <Lens>
              <Image
                src="/metageeks-work/dalmia.png"
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg aspect-video object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Lens>
          </div>
        </div>
      ),
    },
    {
      title: "Freelancer",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Implemented my skills in{" "}
            <strong>various freelancing projects</strong>, gaining hands-on
            experience and delivering <strong>quality work</strong> to clients.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            I <strong>collaborated with clients</strong> to understand their
            requirements, provided regular updates, and ensured timely delivery
            of <strong>high-quality solutions</strong>.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            This experience has significantly contributed to and{" "}
            <strong>my professional growth</strong> ability to manage and
            execute projects independently.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <Lens>
              <Image
                src="/metageeks-work/game-terminal.png"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-auto aspect-video w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Lens>
            <Lens>
              <Image
                src="/metageeks-work/cc-design.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-auto aspect-video w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </Lens>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div id="experience" className="w-full">
      <Timeline data={data} />
    </div>
  );
}
