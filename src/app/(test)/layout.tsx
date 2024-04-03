"use client";

import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log("DashboardLayout useEffect");
    return () => {
      console.log("DashboardLayout cleanup");
    };
  });

  return <section className="grid place-items-center">{children}</section>;
}
