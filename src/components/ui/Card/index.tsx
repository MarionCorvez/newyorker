import Image from "next/image";
import Link from "next/link";

interface CardProps {
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
}

export default async function Card({
  id,
  content,
  height,
  width,
  alt,
  title,
  cat,
  image,
  url,
  author,
  cls,
}: CardProps) {
  return (
    <>
      <article key={id} className={`card ${cls}`}>
        <Link href={url} prefetch={false} className="container">
          <div className="media-wrapper">
            <Image
              className="media"
              src={image}
              alt={alt}
              width={width}
              height={height}
            />
          </div>
          <div className="txt-wrapper">
            {cat && <p>{cat}</p>}
            <h3 className="head heading-3">{title}</h3>
            {content && <p className="details">{content}</p>}
            {author && (
              <div className="author">
                <p>
                  By <span>{author}</span>
                </p>
              </div>
            )}
          </div>
        </Link>
      </article>
    </>
  );
}
