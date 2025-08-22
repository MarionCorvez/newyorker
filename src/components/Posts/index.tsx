import { promises as fs } from "fs";
import Card from "@/components/ui/Card";

export default async function Posts() {
  const file = await fs.readFile(
    process.cwd() + "/src/lib/data/posts.json",
    "utf8"
  );
  const datas = JSON.parse(file);

  const dataList = datas.map(
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
        cls={data.isHighlighted ? "card card--highlighted" : "card"}
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
        isFeatured={false}
        isHighlighted={false}
      />
    )
  );

  return (
    <>
      <section className="gallery gallery-list">
        <div className="panel">{dataList}</div>
      </section>
    </>
  );
}
