import { notFound } from "next/navigation";
import PostCover from "@/components/PostCover";
import PostContent from "@/components/PostContent";
import PostImage from "@/components/PostImage";
import Testimonial from "@/components/Testimonial";
import PostNext from "@/components/PostNext";

async function fetchCases(id: string) {
  const response = await fetch(
    `https://688f1a90f21ab1769f8839d2.mockapi.io/cases/${id}`
  );
  if (!response.ok) return undefined;
  return response.json();
}

export default async function CasePage({
  params,
}: {
  params: Promise<{
    caseId: string;
    id: number;
    title: string;
    content: string;
  }>;
}) {
  const { caseId } = await params;
  const data = await fetchCases(caseId);

  if (!data) {
    notFound();
  }

  return (
    <>
      <PostCover
        image={data.image}
        alt={data.alt}
        width={data.width}
        height={data.height}
        title={data.title}
        content={data.content}
      />
      <section id="intro">
        <PostContent isValue={false} isPartners={false} />
      </section>
      <PostImage
        src="/images/cases/case-study-veynd-1.avif"
        alt="Picture of a woman running"
        width={1600}
        height={1111}
      />
      <PostContent isValue={false} isPartners={true} />
      <PostImage
        src="/images/cases/case-study-veynd-2.avif"
        alt="Picture of two people dressed with Veyn clothes"
        width={1600}
        height={1110}
      />
      <PostContent isValue={true} isPartners={false} />
      <Testimonial />

      <PostNext />
    </>
  );
}
