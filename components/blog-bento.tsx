import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function BlogBento() {
  return (
    <div className="flex h-full w-full cursor-pointer items-center justify-center px-10">
      <Link href="/blog">
        <h1 className="font-statoshi-bold text-lg tracking-widest text-slate-100">
          Blog
        </h1>
      </Link>
      <ArrowUpRight className="transition-all group-hover:-translate-y-1 group-hover:translate-x-2 group-hover:text-blue-500" />
    </div>
  );
}
