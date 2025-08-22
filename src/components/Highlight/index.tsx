import { promises as fs } from "fs";
import Card from "@/components/ui/Card";

export default async function Highlight() {
  const file = await fs.readFile(
    process.cwd() + "/src/lib/data/posts.json",
    "utf8"
  );
  const datas = JSON.parse(file);

  // Filter by condition
  const isFeatured = datas.filter(
    (data: { isFeatured: boolean }) => data.isFeatured === true
  );

  // Filter by category
  const aviation = datas.filter(
    (data: { category: string }) => data.category === "Annals of Aviation"
  );

  // Sort by latest posts
  datas.sort(
    // aviation.sort(
    (
      a: { date: string | number | Date },
      b: { date: string | number | Date }
    ) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );

  // Latest 4 posts except 1st
  const latest = datas.slice(1, 5);

  // const dataList = aviation.map(
  const dataList = latest.map(
    (data: {
      id: string;
      content: string;
      height: number;
      width: number;
      alt: string;
      title: string;
      cat: string;
      image: string;
      url: string;
      author: string;
      cls: string;
    }) => (
      <Card
        cls="card--list"
        key={data.id}
        id={data.id}
        content={data.content}
        height={data.height}
        width={data.width}
        alt={data.alt}
        title={data.title}
        cat={data.cat}
        image={data.image}
        author={data.author}
        url={`/case-studies/${data.id}`}
      />
    )
  );

  return (
    <>
      <section className="gallery gallery-auto">
        <div className="panel">{dataList}</div>
      </section>
    </>
  );
}
