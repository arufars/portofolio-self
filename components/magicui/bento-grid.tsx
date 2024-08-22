import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "#/lib/utils";
import { Button } from "#/components/ui/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-4 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  name: string;
  className: string;
  background: ReactNode | JSX.Element;
  description: string;
  href: string;
  cta?: string;
  Icon?: any;
  withHoverHidden?: boolean;
  withHoverBorderCard?: boolean;
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  withHoverHidden = true,
  withHoverBorderCard = true,
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col rounded-xl",
      // light styles outline-dotted outline-slate-500
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)]",
      "group-hover:dark:border-blue-100",
      withHoverHidden
        ? "justify-between overflow-hidden"
        : `${className} rounded-xl`,
      className,
    )}
  >
    <div
      className={cn(
        "relative h-full w-full",
        withHoverBorderCard
          ? "rounded-xl border border-transparent transition-all hover:border hover:border-blue-600"
          : "",
      )}
    >
      {background}
    </div>

    {withHoverHidden && (
      <>
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
          {Icon ? (
            <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
          ) : null}
          <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
            {name}
          </h3>
          <p className="max-w-lg text-neutral-400">{description}</p>
        </div>

        {cta && (
          <div
            className={cn(
              "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
          >
            <Button
              variant="ghost"
              asChild
              size="sm"
              className="pointer-events-auto"
            >
              <a href={href}>
                {cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
      </>
    )}
  </div>
);

export { BentoCard, BentoGrid };
