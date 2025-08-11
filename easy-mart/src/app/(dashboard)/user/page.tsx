'use client'

import React from "react";

const recentOrders = [
  { id: "ORD123", product: "Wireless Headphones", status: "Shipped", date: "2025-08-05" },
  { id: "ORD124", product: "Smartwatch", status: "Processing", date: "2025-08-07" },
  { id: "ORD125", product: "Gaming Keyboard", status: "Delivered", date: "2025-07-30" },
];

export default function UserDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-heading text-green-600 mb-6">
        Welcome to Your Dashboard
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Recent Orders
        </h2>
        {recentOrders.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">No recent orders found.</p>
        ) : (
          <ul className="space-y-3">
            {recentOrders.map((order) => (
              <li
                key={order.id}
                className="p-4 bg-white dark:bg-gray-800 rounded shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {order.product}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Order ID: {order.id}</p>
                </div>
                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Shipped"
                        ? "text-blue-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {order.status}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{order.date}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Quick Links
        </h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="/dashboard/user/profile"
            className="px-5 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700 transition"
          >
            Profile Settings
          </a>
          <a
            href="/dashboard/user/orders"
            className="px-5 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700 transition"
          >
            View All Orders
          </a>
          <a
            href="/products"
            className="px-5 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700 transition"
          >
            Shop Products
          </a>
          <a
            href="/compare"
            className="px-5 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700 transition"
          >
            Compare Products
          </a>
        </div>
      </section>
    </div>
  );
}
