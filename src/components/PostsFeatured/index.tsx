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
      category: string;
      image: string;
      url: string;
      author: string;
      cls: string;
    }) => (
      <Card
        cls="card-background theme--background"
        key={data.id}
        id={data.id}
        content={data.content}
        author={data.author}
        height={data.height}
        width={data.width}
        alt={data.alt}
        title={data.title}
        cat={data.category}
        image={data.image}
        url={`/articles/${data.id}`}
      />
    )
  );

  return (
    <>
      <section className="gallery ">
        <div className="panel">{dataList}</div>
      </section>
    </>
  );
}
