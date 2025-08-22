import Hero from "@/components/Hero";
import Posts from "@/components/Posts";

export default function Articles() {
  const data = {
    title: "News, thoughts & opinions from an industry leading agency.",
  };

  return (
    <>
      <Hero title={data.title} content={undefined} active={""} txt={""} />
      <Posts />
    </>
  );
}
