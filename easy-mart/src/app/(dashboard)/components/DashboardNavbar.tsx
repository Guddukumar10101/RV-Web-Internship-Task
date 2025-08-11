"use client";

import Link from "next/link";

export default function DashboardNavbar() {
  return (
    <nav className="bg-gray-800 text-white flex items-center justify-between px-6 h-14">
      <Link href="/dashboard" className="text-lg font-bold text-green-400">
        EasyMart Dashboard
      </Link>

      <div className="space-x-4">
        <Link href="/dashboard/profile" className="hover:text-green-300">
          Profile
        </Link>
        <Link href="/dashboard/orders" className="hover:text-green-300">
          Orders
        </Link>
        <Link href="/dashboard/compare" className="hover:text-green-300">
          Compare
        </Link>
        <button className="bg-green-500 px-3 py-1 rounded hover:bg-green-600">
          Logout
        </button>
      </div>
    </nav>
  );
}
