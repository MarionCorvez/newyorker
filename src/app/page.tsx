import StaticCover from "@/components/StaticCover";
import CasesFeatured from "@/components/CasesFeatured";
import LogoClouds from "@/components/LogoClouds";
import PostsFeatured from "@/components/PostsFeatured";
import Hero from "@/components/Hero";

export default function Home() {
  const data = {
    title:
      "The Shopify Plus agency for the world’s most design-conscious luxury brands.",
  };

  return (
    <>
      <Hero title={data.title} content={undefined} active={""} txt={""} />
      <StaticCover
        src="/images/carson-missing-sheep.avif"
        alt="Picture of Maria Tarasova"
        width={1600}
        height={900}
      />
      <CasesFeatured />
      <LogoClouds head="" />
      <PostsFeatured />
    </>
  );
}
