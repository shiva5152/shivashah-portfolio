"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconPlugConnected,
  IconTerminal2,
  IconBrandPrisma,
  IconSkateboarding,
  IconPhone,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Skills",
      icon: (
        <IconBrandPrisma className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Experience",
      icon: (
        <IconSkateboarding className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Connect",
      icon: (
        <IconPlugConnected className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];
  return (
    <div className="flex items-center justify-between w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
      <div className="flex items-center justify-end gap-4">
        <div className="flex hover:text-cyan-500  items-center gap-1">
          <IconPhone className="h-6 w-full hover:text-cyan-500 text-neutral-500 dark:text-neutral-300" />
          <p className="text-sm whitespace-nowrap">+91 9911577254</p>
        </div>
        <div className="flex hover:text-cyan-500 items-center gap-1">
          <IconMail className="h-full w-full hover:text-cyan-500text-neutral-500 dark:text-neutral-300" />
          <p className="text-sm">shivashah5152@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
