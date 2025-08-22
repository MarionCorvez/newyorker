import type { Metadata } from "next";
import HeroSplit from "@/components/HeroSplit";
import PostContent from "@/components/PostContent";
import LogoClouds from "@/components/LogoClouds";
import CasesFeatured from "@/components/CasesFeatured";

export const metadata: Metadata = {
  title: "About us | By Association Only's website reproduction",
  description: "About By Association Only",
  keywords: "website, reproduction",
};

const data = {
  title:
    "The Shopify Plus agency for the world’s most design-conscious luxury brands.",
  image: "/images/cover-about.avif",
  alt: "Picture of cover about",
  width: 720,
  height: 720,
};

export default function About() {
  return (
    <>
      <HeroSplit
        theme={""}
        title={data.title}
        image={data.image}
        alt={data.alt}
        width={data.width}
        height={data.height}
        link={undefined}
        href={""}
        label={""}
      />
      <PostContent isValue={false} isPartners={false} />
      <LogoClouds
        head="International Clientbase: UK / USA / Germany / France / Portugal /
          Switzerland / UAE / Australia / Canada / Hong Kong / Korea / +"
      />

      <CasesFeatured />
    </>
  );
}
