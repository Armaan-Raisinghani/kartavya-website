"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function MainNav() {
  return (
    <nav className="px-4 py-2 bg-[#FFF1E6] mx-auto">
      <div className="flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="h-full rounded-full"
        />
        <div className="flex gap-4 ">
          <Link href="/">
            <Button
              variant="ghost"
              className="bg-[#20B2AA] text-white hover:bg-[#20B2AA]/90"
            >
              Home
            </Button>
          </Link>
          <Link href="/events">
            <Button
              variant="ghost"
              className="bg-[#20B2AA] text-white hover:bg-[#20B2AA]/90"
            >
              Events
            </Button>
          </Link>
          <Link href="/about">
            {" "}
            <Button
              variant="ghost"
              className="bg-[#20B2AA] text-white hover:bg-[#20B2AA]/90"
            >
              About us
            </Button>
          </Link>
          <Link href="/">
            {" "}
            <Button
              variant="ghost"
              className="bg-[#20B2AA] text-white hover:bg-[#20B2AA]/90"
            >
              Contact us
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
