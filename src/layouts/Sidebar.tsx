"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Home,
  Icon,
  LineChart,
  Package,
  Package2,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import navElements from "./sidemenu-item";
import { IconBase } from "react-icons";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navElements.map((element) => {
              return (
                <Link
                  key={element.id}
                  href={element.link}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 hover:text-primary transition-all
                    ${
                      pathname === element.link
                        ? "text-primary bg-muted"
                        : "text-muted-foreground"
                    }`}
                >
                  {element.icon}
                  {element.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
