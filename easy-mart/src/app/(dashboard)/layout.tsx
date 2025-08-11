// app/dashboard/layout.tsx
"use client";  // Kyuki yahan React hook ya state use karoge to

import React from "react";
import DashboardNavbar from "./components/DashboardNavbar";
import DashboardFooter from "./components/DashboardFooter";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
      <DashboardNavbar />
      <main>{children}</main>
      <DashboardFooter />
      
    </div>
  );
}
