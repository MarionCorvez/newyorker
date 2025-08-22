import Hero from "@/components/Hero";
import StaticCover from "@/components/StaticCover";
import Cases from "@/components/Cases";

export default function CaseStudies() {
  const data = {
    content: {
      active: "Case studies",
      txt: "Projects",
    },
    title:
      "Architecting best-in-class ecommerce solutions, so that merchant growth is on-brand & limitless.",
  };

  return (
    <>
      <Hero
        content={data.content}
        active={data.content.active}
        txt={data.content.txt}
        title={data.title}
      />
      <StaticCover
        src="/images/cases/jean-ackins.avif"
        alt="Picture of Jean Ackins project"
        width={1200}
        height={630}
      />
      <Cases />
    </>
  );
}
