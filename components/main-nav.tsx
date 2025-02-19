"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-between p-4 bg-[#FFF1E6]">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-2xl font-bold">Kartavya Club</span>
      </Link>
      <div className="flex items-center space-x-6">
        <Link
          href="/"
          className={cn(
            "text-sm transition-colors hover:text-primary",
            pathname === "/" ? "text-primary font-medium" : "text-muted-foreground",
          )}
        >
          Home
        </Link>
        <Link
          href="/events"
          className={cn(
            "text-sm transition-colors hover:text-primary",
            pathname === "/events" ? "text-primary font-medium" : "text-muted-foreground",
          )}
        >
          Events
        </Link>
        <Link
          href="/gallery"
          className={cn(
            "text-sm transition-colors hover:text-primary",
            pathname === "/gallery" ? "text-primary font-medium" : "text-muted-foreground",
          )}
        >
          Gallery
        </Link>
        <Link
          href="/about"
          className={cn(
            "text-sm transition-colors hover:text-primary",
            pathname === "/about" ? "text-primary font-medium" : "text-muted-foreground",
          )}
        >
          About
        </Link>
      </div>
    </nav>
  )
}

