import { promises as fs } from "fs";
import Card from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";

export default async function CasesFeatured() {
  const file = await fs.readFile(
    process.cwd() + "/src/lib/data/cases.json",
    "utf8"
  );
  const datas = JSON.parse(file);

  const isFeatured = datas.filter(
    (data: { isFeatured: boolean }) => data.isFeatured === true
  );

  const dataList = isFeatured.map(
    (data: {
      id: number;
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
        cls="card--background"
        key={data.id}
        id={data.id}
        content={data.content}
        height={data.height}
        width={data.width}
        alt={data.alt}
        title={data.title}
        cat={""}
        image={data.image}
        author={data.author}
        url={`/case-studies/${data.id}`}
      />
    )
  );

  return (
    <>
      <section className="gallery gallery-scroll">
        <div className="container-sticky">
          <div className="panel">
            <h2 className="heading-1 title">
              Shopify Plus <em>Case Studies</em>.
            </h2>
            {dataList}
            <Link
              href={"/case-studies"}
              aria-label="Access to Case studies page"
              className="cta-wrapper"
            >
              <Image
                className="cta-media"
                src="/icons/link-works.png"
                alt="Link to Case studies page"
                width={321}
                height={321}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
