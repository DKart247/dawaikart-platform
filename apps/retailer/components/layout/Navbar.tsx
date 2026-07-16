"use client";

import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <header className="h-16 border-b bg-white px-6 flex items-center justify-between">

      <div className="flex items-center gap-3 w-96">
        <Search className="text-gray-400" size={18} />

        <Input
          placeholder="Search medicines, orders..."
          className="border-0 shadow-none focus-visible:ring-0"
        />
      </div>

      <div className="flex items-center gap-6">

        <button className="relative">
          <Bell size={20} />

          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>DK</AvatarFallback>
          </Avatar>

          <div>
            <p className="font-semibold">
              Dawaikart Pharmacy
            </p>

            <p className="text-xs text-gray-500">
              Retailer
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}