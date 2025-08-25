"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SvgMenuOpen from "@/components/ui/Svg/SvgMenuOpen";
import SvgMenuClose from "@/components/ui/Svg/SvgMenuClose";
import SvgSearch from "@/components/ui/Svg/SvgSearch";
import NavSecondary from "@/components/NavSecondary";

export default function NavPrimary() {
  // Manage active links
  const pathname = usePathname();

  // Manage static header
  if (typeof window !== "undefined") {
    const isLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const [isScroll, setIsScroll] = useState(false);

    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsScroll(scrolled > 10);
    };

    useEffect(() => {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Manage mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      document.body.classList.toggle("has--no-scroll");
      setIsScroll(true);
    };
    const closeMenu = () => {
      setIsMenuOpen(false);
      setIsScroll(!isScroll);
    };

    return (
      <>
        <div
          className={`header ${
            isScroll || isMenuOpen ? "is--scroll" : "is--unscroll"
          }`}
        >
          <div className="header-container">
            <button
              className="button"
              aria-labelledby="Menu Toggle Button"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <SvgMenuClose /> : <SvgMenuOpen />}
            </button>
            <Link
              className={`link logo-wrapper ${
                pathname === "/" ? "active" : ""
              }`}
              href={"/"}
              aria-label="Access to Home page"
              onClick={closeMenu}
            >
              {isScroll && isLight ? (
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
              className="nav nav-primary"
              role="navigation"
              aria-label="Primary navigation"
            >
              <Link
                className={`link ${
                  pathname === "/newsletter" ? "is--active" : ""
                }`}
                href={"/newsletter"}
                aria-label="Access to Newsletter page"
                onClick={closeMenu}
              >
                Newsletter
              </Link>
              <Link
                className={`link ${
                  pathname === "/sign-in" ? "is--active" : ""
                }`}
                href={"/sign-in"}
                aria-label="Access to Sign In page"
                onClick={closeMenu}
              >
                Sign In
              </Link>
              {isScroll ? null : (
                <Link
                  className={`link ${
                    pathname === "/subscribe" ? "is--active" : ""
                  }`}
                  href={"/subscribe"}
                  aria-label="Access to Subscribe page"
                  onClick={closeMenu}
                >
                  Subscribe
                </Link>
              )}
              <Link
                className={`link ${pathname === "/search" ? "is--active" : ""}`}
                href={"/search"}
                aria-label="Search on the website"
                onClick={closeMenu}
              >
                <SvgSearch />
              </Link>
            </nav>
          </div>
        </div>
        {isMenuOpen ? (
          <div className="is--mobile">
            <NavSecondary />
            <ul>
              <li>Search</li>
              <li>Sign in</li>
              <li>Newsletter</li>
            </ul>
          </div>
        ) : (
          <NavSecondary />
        )}
      </>
    );
  }
}
