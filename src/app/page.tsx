import Hero from "@/components/Hero";
import NavSecondary from "@/components/NavSecondary";
import Highlight from "@/components/Highlight";
import PostsFeatured from "@/components/PostsFeatured";

export default function Home() {
  const data = {
    title:
      "The Shopify Plus agency for the world’s most design-conscious luxury brands.",
  };

  return (
    <>
      <Hero />
      <PostsFeatured />
      <Highlight />
    </>
  );
}
