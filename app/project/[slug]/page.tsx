import { notFound } from "next/navigation";
import { projects } from "#/lib/data";
import Link from "next/link";
import { ArrowLeftIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  return {
    title: project ? `${project.name} — Firmansyah` : "Project Not Found",
    description: project?.body ?? "",
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const idx = projects.findIndex((p) => p.slug === resolvedParams.slug);

  if (idx === -1) notFound();

  const project = projects[idx];
  const prevProject = idx > 0 ? projects[idx - 1] : null;
  const nextProject = idx < projects.length - 1 ? projects[idx + 1] : null;
  const isWIP = project.link === "#";

  return (
    <div className="relative w-full">
      {/* subtle grid pattern inherited from layout */}
      <div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-2">

        {/* ── Back button ── */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-gray-50/[.1] bg-gray-50/[.05] px-4 py-2 text-sm text-neutral-400 transition-all duration-200 hover:border-gray-50/[.2] hover:bg-gray-50/[.10] hover:text-white"
        >
          <ArrowLeftIcon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* ── Hero card ── */}
        <div className="overflow-hidden rounded-[1.25rem] border border-gray-50/[.1] bg-gray-50/[.05] shadow-[0_-20px_80px_-20px_#ffffff1f_inset]">
          {/* top accent line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="p-8 md:p-10">
            {/* Status badge */}
            <div className="mb-6 flex items-center gap-3">
              {isWIP ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-50/[.1] bg-gray-50/[.07] px-3 py-1 text-xs font-medium text-neutral-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neutral-400" />
                  Work in Progress
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-50/[.1] bg-gray-50/[.07] px-3 py-1 text-xs font-medium text-neutral-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                  Live
                </span>
              )}
              {/* project index badge */}
              <span className="text-xs text-neutral-600">
                {String(idx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
              {project.name}
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
              {project.body}
            </p>
          </div>
        </div>

        {/* ── Content sections ── */}
        <div className="grid gap-4 md:grid-cols-2">

          {/* About — full width */}
          <Section
            icon={<IconInfo />}
            title="About the Project"
            className="md:col-span-2"
          >
            <p className="leading-relaxed text-neutral-400">
              {project.description}
            </p>
          </Section>

          {/* Use Case */}
          <Section icon={<IconShield />} title="Use Case & Purpose">
            <p className="leading-relaxed text-neutral-400">{project.useCase}</p>
          </Section>

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <Section icon={<IconCode />} title="Tech Stack">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-gray-50/[.1] bg-gray-50/[.05] px-3 py-1 text-xs font-medium text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Section>
          )}
        </div>

        {/* ── CTA button ── */}
        {!isWIP && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-2 rounded-[1rem] border border-gray-50/[.1] bg-white px-6 py-4 text-sm font-semibold text-black shadow-[0_1px_0_0_rgba(255,255,255,0.1)_inset] transition-all duration-200 hover:bg-white/90 hover:scale-[1.01]"
          >
            Visit Project
            <ExternalLinkIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}

        {/* ── Prev / Next navigation ── */}
        <div className="grid grid-cols-2 gap-4 pb-8">
          {prevProject ? (
            <Link
              href={`/project/${prevProject.slug}`}
              className="group flex flex-col rounded-[1rem] border border-gray-50/[.1] bg-gray-50/[.05] p-4 transition-all duration-200 hover:border-gray-50/[.15] hover:bg-gray-50/[.08]"
            >
              <span className="mb-1 flex items-center gap-1 text-xs text-neutral-600">
                <ArrowLeftIcon className="h-3 w-3 transition-transform duration-200 group-hover:-translate-x-0.5" />
                Previous
              </span>
              <span className="text-sm font-medium text-neutral-300 line-clamp-1">
                {prevProject.name}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/project/${nextProject.slug}`}
              className="group flex flex-col items-end rounded-[1rem] border border-gray-50/[.1] bg-gray-50/[.05] p-4 transition-all duration-200 hover:border-gray-50/[.15] hover:bg-gray-50/[.08]"
            >
              <span className="mb-1 flex items-center gap-1 text-xs text-neutral-600">
                Next
                <ArrowLeftIcon className="h-3 w-3 rotate-180 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
              <span className="text-sm font-medium text-neutral-300 line-clamp-1">
                {nextProject.name}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Reusable section card ── */
function Section({
  icon,
  title,
  children,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[1.25rem] border border-gray-50/[.1] bg-gray-50/[.05] p-6 transition-all duration-200 hover:border-gray-50/[.15] hover:bg-gray-50/[.07] ${className}`}
    >
      <div className="mb-4 flex items-center gap-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-50/[.1] bg-gray-50/[.07] text-neutral-400">
          {icon}
        </div>
        <h2 className="text-sm font-semibold text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
}

/* ── Inline SVG icons ── */
function IconInfo() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
function IconCode() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}
