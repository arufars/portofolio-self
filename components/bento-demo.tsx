import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import dynamic from "next/dynamic";

import { BentoCard, BentoGrid } from "#/components/magicui/bento-grid";

import MySelf from "./my-self";
import AboutMe from "./about-me";
import LetConnect from "./lets-connect";

const AnimatedShinyText = dynamic(
  () => import("#/components/magicui/animated-shiny-text"),
  { ssr: false }
);

const features = [
  {
    Icon: FileTextIcon,
    name: "My Self",
    description: "FullStack Development",
    href: "/",
    cta: "Learn more",
    background: <MySelf />,
    className: "xl:col-start-1 xl:col-end-4 xl:row-start-1 xl:row-end-6",
  },
  {
    Icon: CalendarIcon,
    name: "",
    description: "",
    href: "/",
    cta: "",
    background: <AboutMe />,
    className: "xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-9",
    withHover: false,
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "xl:row-start-6 xl:row-end-8 xl:col-start-2 xl:col-end-4",
  },
  {
    Icon: "",
    name: "",
    description: "",
    href: "/",
    cta: "Learn more",
    background: <LetConnect />,
    className: "xl:col-start-1 xl:col-end-2 xl:row-start-6 xl:row-end-10",
  },

  // {
  //   Icon: BellIcon,
  //   name: "Notifications 1",
  //   description:
  //     "Get notified when someone shares a file or mentions you in a comment.",
  //   href: "/",
  //   cta: "Learn more",
  //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
  //   className: "xl:col-start-3 xl:col-end-3 xl:row-start-3 xl:row-end-4",
  // },
  {
    Icon: BellIcon,
    name: "Notifications 2",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "xl:col-start-2 xl:col-end-2 xl:row-start-8 xl:row-end-10",
  },
  {
    Icon: "",
    name: "Blog",
    description: "",
    cta: "Learn more",
    href: "/blog",
    background: "",
    className: "xl:col-start-3 xl:col-end-3 xl:row-start-8 xl:row-end-10",
  },
  {
    Icon: BellIcon,
    name: "Notifications 3",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="flex gap-x-1 h-full items-center justify-center px-2">
        <AnimatedShinyText className="text-sm text-slate-400 w-4/5 ">
          © {new Date().getFullYear()} · Developed with ♥️ in Next.js by Firmansyah.
        </AnimatedShinyText>
        {/* <a href="">
          <ArrowUpRight width={15} height={15} />
        </a> */}
      </div>
    ),
    className:
      "xl:col-start-4 xl:col-end-5 xl:row-start-9 xl:row-end-10 items-center justify-center",
    withHover: false,
  },
];

export async function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3 xl:grid-rows-9 h-[700px]">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}


// (
//   <div className="group cursor-pointer">
//     <AnimatedShinyText className="w-full h-full flex justify-center items-center gap-x-2">
//       <h1 className="text-lg">Blog </h1>
//       {/* <ArrowUpRight
//         width={20}
//         height={20}
//         className="transition-all duration-200 ease-out group-hover:scale-110 group-hover:translate-x-2 group-hover:text-red-500"
//       /> */}
//     </AnimatedShinyText>
//   </div>
// )