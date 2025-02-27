"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // You may need to install lucide-react

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="px-4 py-2 mx-auto">
      <div className="flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="h-full rounded-full"
        />
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-[#20B2AA]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-4">
          <NavLinks />
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2">
          <NavLinks />
        </div>
      )}
    </nav>
  );
}

// Extracted links to a separate component to avoid duplication
function NavLinks() {
  return (
    <>
      <Link href="/">
        <Button
          variant="ghost"
          className="bg-[#20B2AA] text-white hover:bg-[#20B2AA]/90 w-full"
        >
          Home
        </Button>
      </Link>
      <Link href="/events">
        <Button
          variant="ghost"
          className="bg-[#20B2AA] text-white hover:bg-[#20B2AA]/90 w-full"
        >
          Events
        </Button>
      </Link>
      <Link href="/about">
        <Button
          variant="ghost"
          className="bg-[#20B2AA] text-white hover:bg-[#20B2AA]/90 w-full"
        >
          About us
        </Button>
      </Link>
      <Link href="/">
        <Button
          variant="ghost"
          className="bg-[#20B2AA] text-white hover:bg-[#20B2AA]/90 w-full"
        >
          Contact us
        </Button>
      </Link>
    </>
  );
}
