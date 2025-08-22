import { promises as fs } from "fs";
import Image from "next/image";

export default async function LogoClouds({ head }: { head: string }) {
  const file = await fs.readFile(
    process.cwd() + "/src/lib/data/clients.json",
    "utf8"
  );
  const datas = JSON.parse(file);

  const dataList = datas.map((data: { title: string; image: string }) => (
    <Image
      key={data.title}
      src={data.image}
      alt={data.title}
      width={250}
      height={150}
    />
  ));

  return (
    <>
      <section className="logo-clouds">
        {head && <h2 className="heading-2 title">{head}</h2>}
        <div className="container">{dataList}</div>
      </section>
    </>
  );
}
