"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Pill,
  Truck,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Inventory", href: "/inventory", icon: Package },
  { name: "Orders", href: "/orders", icon: ShoppingCart },
  { name: "Medicines", href: "/medicines", icon: Pill },
  { name: "Suppliers", href: "/suppliers", icon: Truck },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-screen">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-green-600">
          Dawaikart247
        </h1>

        <p className="text-sm text-gray-500">
          Retailer Portal
        </p>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg p-3 hover:bg-green-50 hover:text-green-600 transition"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}