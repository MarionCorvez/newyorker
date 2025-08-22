import { promises as fs } from "fs";
import Card from "@/components/ui/Card";

export default async function Cases() {
  const file = await fs.readFile(
    process.cwd() + "/src/lib/data/cases.json",
    "utf8"
  );
  const datas = JSON.parse(file);

  // const response = await fetch(
  //   "https://688f1a90f21ab1769f8839d2.mockapi.io/cases"
  // );
  // const datas = await response.json();

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
        cls={
          data.isHighlighted
            ? "card card--highlighted card--background"
            : "card"
        }
        key={data.id}
        id={data.id}
        content={data.content}
        height={data.height}
        width={data.width}
        alt={data.alt}
        title={data.title}
        image={data.image}
        cta="View case study"
        arrow="icon--sm"
        url={`/case-studies/${data.id}`}
        isFeatured
        isHighlighted
      />
    )
  );

  return (
    <>
      <section className="gallery gallery-bloc">
        <div className="panel">{dataList}</div>
      </section>
    </>
  );
}
