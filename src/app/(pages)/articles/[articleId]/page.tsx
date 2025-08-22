import { notFound } from "next/navigation";

async function fetchCases(id: string) {
  const response = await fetch(
    `https://688f1a90f21ab1769f8839d2.mockapi.io/cases/${id}`
  );
  if (!response.ok) return undefined;
  return response.json();
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{
    articleId: string;
    id: number;
    title: string;
    content: string;
  }>;
}) {
  const { articleId } = await params;
  const data = await fetchCases(articleId);

  if (!data) {
    notFound();
  }

  return (
    <>
      <article key={data.id}>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
      </article>
    </>
  );
}
