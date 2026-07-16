"use client";

import Link from "next/link";

import {
  Plus,
  Package,
  ShoppingCart,
  Truck,
  FileText,
  ScanLine,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const actions = [
  {
    title: "New Order",
    icon: ShoppingCart,
    href: "/orders",
  },
  {
    title: "Add Medicine",
    icon: Plus,
    href: "/inventory",
  },
  {
    title: "Scan Prescription",
    icon: ScanLine,
    href: "/orders",
  },
  {
    title: "Inventory",
    icon: Package,
    href: "/inventory",
  },
  {
    title: "Suppliers",
    icon: Truck,
    href: "/suppliers",
  },
  {
    title: "Reports",
    icon: FileText,
    href: "/analytics",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-lg font-semibold">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-3">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
            >
              <Button
                variant="outline"
                className="h-24 w-full flex-col gap-2 rounded-xl"
              >
                <Icon className="h-6 w-6 text-blue-600" />

                <span className="text-sm">
                  {action.title}
                </span>

              </Button>
            </Link>
          );
        })}

      </div>

    </div>
  );
}