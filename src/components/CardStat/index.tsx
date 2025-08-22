import { promises as fs } from "fs";
import Image from "next/image";

export default async function CardStat() {
  const file = await fs.readFile(
    process.cwd() + "/src/lib/data/stats.json",
    "utf8"
  );
  const datas = JSON.parse(file);

  const dataList = datas.map(
    (data: {
      id: string;
      stat: string;
      content: string;
      image: string;
      alt: string;
    }) => (
      <article key={data.id} className="card card--stat card--background">
        <div className="container">
          <div className="media-wrapper">
            <Image
              className="media"
              src={data.image}
              alt={data.alt}
              width={788}
              height={988}
            />
          </div>
          <div className="txt-wrapper">
            <h3 className="head heading-3">{data.stat}</h3>
            <p>{data.content}</p>
          </div>
        </div>
      </article>
    )
  );

  return (
    <>
      <section className="gallery gallery-static">
        <div className="panel">{dataList}</div>
      </section>
    </>
  );
}
