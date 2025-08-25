"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavSecondary() {
  const pathname = usePathname();
  interface NavLinkType {
    id: string;
    title: string;
    slug: string;
  }

  const navLinks: NavLinkType[] = [
    { id: "1", title: "The Latest News", slug: "news" },
    { id: "2", title: "Books & Culture", slug: "culture" },
    { id: "3", title: "Fiction & Poetry", slug: "fiction" },
    { id: "4", title: "Humor & Cartoons", slug: "humor" },
    { id: "5", title: "Magazine", slug: "magazine" },
    { id: "6", title: "Puzzles & Games", slug: "games" },
    { id: "7", title: "Video", slug: "video" },
    { id: "8", title: "Podcasts", slug: "podcasts" },
    { id: "9", title: "Goings On", slug: "goings-on" },
    { id: "10", title: "Shop", slug: "shop" },
    { id: "11", title: "100th Anniversary", slug: "100" },
  ];

  return (
    <nav
      className={`nav nav-secondary ${
        pathname !== `/` ? "is--top" : "is--bottom"
      }`}
      role="navigation"
      aria-label="Secondary navigation"
    >
      {navLinks.map((link) => (
        <Link
          key={link.id}
          className={`link link-secondary ${
            pathname === `/${link.slug}` ? "is--active" : ""
          }`}
          href={`/${link.slug}`}
          aria-label={`Access to ${link.title} page`}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
