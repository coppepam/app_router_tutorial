"use client";

import { useEffect } from "react";

export default function DashBoard_2_Template({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log("DashBoard_2_Template useEffect");
    return () => {
      console.log("DashBoard_2_Template cleanup");
    };
  });
  return <div>{children}</div>;
}
