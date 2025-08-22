import Hero from "@/components/Hero";
import StaticCover from "@/components/StaticCover";
import Highlight from "@/components/Highlight";

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
      <Highlight />
    </>
  );
}
