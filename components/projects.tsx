import { cn } from "#/lib/utils";
import Marquee from "#/components/magicui/marquee";
import { projects } from "#/lib/data";
import Link from "next/link";

export default function Projects() {
  return (
    <Marquee
      pauseOnHover
      className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:overflow-x-hidden group-hover:overflow-y-visible"
    >
      {projects.map((f, idx) => (
        <Link href={`/project/${f.slug}`} key={idx}>
          <figure
            className={cn(
              "relative w-40 cursor-pointer overflow-hidden rounded-xl border p-4 h-full",
            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            "hover:z-20 hover:-translate-y-5 hover:scale-105",
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                {f.name}
              </figcaption>
            </div>
          </div>
          <blockquote className="mt-2 text-xs">{f.body}</blockquote>
        </figure>
        </Link>
      ))}
    </Marquee>
  );
}
