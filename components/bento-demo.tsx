"use client";

import { BellIcon } from "@radix-ui/react-icons";

import dynamic from "next/dynamic";

import { BentoCard, BentoGrid } from "#/components/magicui/bento-grid";
import MySelf from "#/components/my-self";
import AboutMe from "#/components/about-me";
import LetsConnect from "#/components/lets-connect";
import { cn } from "#/lib/utils";
import Projects from "./projects";
import BlogBento from "./blog-bento";

const AnimatedShinyText = dynamic(
  () => import("#/components/magicui/animated-shiny-text"),
  { ssr: false },
);

const DigitalClock = dynamic(
  () => import("#/components/client/digital-clock"),
  { ssr: false },
);

const centerFull = "h-full w-full flex justify-center items-center";

const features = [
  {
    Icon: "",
    name: "My Self",
    description: "FullStack Development",
    href: "/",
    cta: "",
    background: <MySelf />,
    //  mobile: full width | tablet: 2 cols | desktop: cols 1-3, rows 1-5
    className:
      "col-span-1 md:col-span-2 xl:col-start-1 xl:col-end-4 xl:row-start-1 xl:row-end-6 w-full h-full",
    withHoverHidden: false,
  },
  {
    Icon: "",
    name: "About Me",
    description: "",
    href: "/",
    cta: "",
    background: <AboutMe />,
    // mobile: full width | tablet: 2 cols | desktop: col 4, rows 1-8
    className:
      "col-span-1 md:col-span-2 xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-9",
    withHoverHidden: false,
  },
  {
    Icon: "",
    name: "Projects",
    description:
      "Check out my awesome web projects! Click to view case studies and live demos.",
    href: "/",
    cta: "Learn more",
    background: <Projects />,
    // mobile: full width | tablet: 2 cols | desktop: cols 2-3, rows 6-8
    className:
      "col-span-1 md:col-span-2 xl:col-start-2 xl:col-end-4 xl:row-start-6 xl:row-end-9",
    withHoverBorderCard: false,
  },
  {
    Icon: "",
    name: "Let's Connect",
    description: "",
    href: "/",
    cta: "Learn more",
    background: <LetsConnect />,
    // mobile: full width | tablet: 1 col | desktop: col 1, rows 6-9
    className:
      "col-span-1 xl:col-start-1 xl:col-end-2 xl:row-start-6 xl:row-end-10",
    withHoverHidden: false,
  },
  {
    Icon: BellIcon,
    name: "Digital Clock",
    description: "Current local time.",
    href: "/",
    cta: "",
    background: (
      <div className={cn(centerFull, "text-center")}>
        <DigitalClock />
      </div>
    ),
    // mobile: full width | tablet: 1 col | desktop: col 2, row 9
    className:
      "col-span-1 xl:col-start-2 xl:col-end-3 xl:row-start-9 xl:row-end-10 w-full h-full",
    withHoverHidden: false,
  },
  {
    Icon: "",
    name: "Blog",
    description: "",
    cta: "",
    href: "/blog",
    background: <BlogBento />,
    // mobile: full width | tablet: 1 col | desktop: col 3, row 9
    className:
      "col-span-1 xl:col-start-3 xl:col-end-4 xl:row-start-9 xl:row-end-10 items-center justify-center",
    withHoverHidden: false,
  },
  {
    Icon: "",
    name: "Footer",
    description: "",
    href: "/",
    cta: "",
    background: (
      <div className="flex h-full items-center justify-center gap-x-1 px-2">
        <AnimatedShinyText className="w-4/5 text-sm text-slate-400">
          © {new Date().getFullYear()} · Developed with ♥️ in Next.js by
          Firmansyah.
        </AnimatedShinyText>
      </div>
    ),
    // mobile: full width | tablet: 2 cols | desktop: col 4, row 9
    className:
      "col-span-1 md:col-span-2 xl:col-start-4 xl:col-end-5 xl:row-start-9 xl:row-end-10 items-center justify-center",
    withHoverHidden: false,
  },
];

export function BentoDemo() {
  return (
    // mobile: auto height | desktop: fixed 700px with 9 explicit rows
    <BentoGrid className="xl:h-[700px] xl:grid-rows-9">
      {features.map((feature, index) => (
        <BentoCard key={`${feature.name}-${index}`} {...feature} />
      ))}
    </BentoGrid>
  );
}
