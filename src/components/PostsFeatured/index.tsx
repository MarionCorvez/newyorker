import { promises as fs } from "fs";
import Card from "@/components/ui/Card";

export default async function PostsFeatured() {
  const file = await fs.readFile(
    process.cwd() + "/src/lib/data/posts.json",
    "utf8"
  );
  const datas = JSON.parse(file);

  const isFeatured = datas.filter(
    (data: { isFeatured: boolean }) => data.isFeatured === true
  );

  // const dataList = datas.map(
  const dataList = isFeatured.map(
    (data: {
      id: number;
      content: string;
      height: number;
      width: number;
      alt: string;
      title: string;
      image: string;
      url: string;
      cta: string;
      arrow: string;
      cls: string;
      isFeatured: boolean;
      isHighlighted: boolean;
    }) => (
      <Card
        cls="card card--background"
        key={data.id}
        id={data.id}
        content={data.content}
        height={data.height}
        width={data.width}
        alt={data.alt}
        title={data.title}
        image={data.image}
        cta="Read article"
        arrow="icon--sm"
        url={`/articles/${data.id}`}
        isFeatured
        isHighlighted
      />
    )
  );

  return (
    <>
      <section className="gallery gallery-area">
        <div className="panel">{dataList}</div>
      </section>
    </>
  );
}
