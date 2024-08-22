import { cn } from "#/lib/utils";

const stackSkill = [
  "React.js",
  "Next.js",
  "Svelte",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Typescript",
  "Javascript",
  "Vercel",
];

export default function AboutMe() {
  return (
    <div className="p-6 relative">
      <h2 className="text-lg 2xl:text-xl font-statoshi-bold">About Me</h2>
      <p className="text-slate-300 leading-relaxed text-sm">
        Hi, I&apos;m Firmansyah, a full stack developer specializing in dynamic
        web applications with modern technologies. My primary tools of choice
        include:
      </p>

      <h2 className="pt-2">My Stack</h2>

      <ul className="text-[12px] text-slate-300 flex flex-wrap gap-x-1 gap-y-1 pt-2">
        {stackSkill.map((skill, idx) => (
          <li
            key={idx}
            className={cn(
              "relative cursor-pointer overflow-hidden rounded-xl border py-1 px-2",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu transition-all duration-300 ease-out"
            )}
          >
            {skill}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-y-2 pt-4 leading-relaxed">
        <p className="text-slate-300 text-sm">
          I&apos;m a passionate Informatics Engineering student and full stack
          developer with a strong focus on the JavaScript ecosystem.
        </p>
        <p className="text-slate-300 text-sm">
          My hobbies include nurturing plants, and I have a deep fascination
          with flora, fauna, and world history. While I have my go-to tools,
          I&apos;m flexible and always open to using the best solution for any
          project.
        </p>
      </div>
    </div>
  );
}

// <p className="text-slate-300 text-sm">
//           I’m a passionate Informatics Engineering student and full stack
//           developer with a strong focus on the JavaScript ecosystem,
//           particularly Next.js. I enjoy both coding and the design process,
//           ensuring every project looks its best.
//         </p>
//         <p className="text-slate-300 text-sm">
//           My hobbies include nurturing plants, and I have a deep fascination
//           with flora, fauna, and world history. While I have my go-to tools, I’m
//           flexible and always open to using the best solution for any project.
//         </p>
