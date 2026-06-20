"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function CurrentPath(
  props: React.HTMLAttributes<HTMLSpanElement>,
) {
  const pathname = usePathname();
  return <span {...props}>{pathname}</span>;
}
