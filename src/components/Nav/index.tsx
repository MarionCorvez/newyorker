"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SvgSearch from "@/components/ui/Svg/SvgSearch";
import SvgMenuOpen from "@/components/ui/Svg/SvgMenuOpen";
import SvgMenuClose from "../ui/Svg/SvgMenuClose";

export default function Nav() {
  const pathname = usePathname();

  if (typeof window !== "undefined") {
    const [isScroll, setIsScroll] = useState(false);

    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsScroll(scrolled > 200);
    };

    useEffect(() => {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <div
        className={`header-container ${
          isScroll ? "is--scroll" : "is--unscroll"
        }`}
      >
        <div className="nav-container">
          <SvgMenuOpen />
          <Link
            className={`link ${pathname === "/" ? "active" : ""}`}
            href={"/"}
            aria-label="Access to Home page"
          >
            {isScroll ? (
              <Image
                className="logo"
                src="/icons/logo-anniver-100.svg"
                alt="The New Yorker logo for 100th anniversary"
                width="736"
                height="68"
              />
            ) : (
              <Image
                className="logo"
                src="/icons/logo-anniver-100-inverted.svg"
                alt="The white New Yorker logo for 100th anniversary"
                width="736"
                height="68"
              />
            )}
          </Link>
          <nav
            className="nav-main"
            role="navigation"
            aria-label="Main Navigation"
          >
            <Link
              className={`link ${
                pathname === "/newsletter" ? "is--active" : ""
              }`}
              href={"/newsletter"}
              aria-label="Access to Newsletter page"
            >
              Newsletter
            </Link>
            <Link
              className={`link ${pathname === "/sign-in" ? "is--active" : ""}`}
              href={"/sign-in"}
              aria-label="Access to Sign In page"
            >
              Sign In
            </Link>
            {isScroll ? null : (
              <Link
                className={`link ${
                  pathname === "/subscribe" ? "is--active" : ""
                }`}
                href={"/Subscribe"}
                aria-label="Access to Subscribe page"
              >
                Subscribe
              </Link>
            )}
            <Link
              className={`link is--self ${
                pathname === "/careers" ? "is--active" : ""
              }`}
              href={"/careers"}
              aria-label="Access to Careers page"
            >
              <SvgSearch />
            </Link>
          </nav>
        </div>
      </div>
    );
  }
}
