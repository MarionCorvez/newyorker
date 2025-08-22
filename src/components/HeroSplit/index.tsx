import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "../ui/ArrowIcon";

interface HeroSplitProps {
  theme: string;
  title: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  link: any;
  label: string;
  href: string;
}

export default function HeroSplit({
  theme,
  title,
  image,
  alt,
  width,
  height,
  link,
  label,
  href,
}: HeroSplitProps) {
  return (
    <>
      <section className={`hero-split ${theme}`}>
        <div className="container">
          <div className="media-wrapper">
            <Image
              className="media"
              src={image}
              alt={alt}
              width={width}
              height={height}
            />
            {link && (
              <Link href={href} className="link-wrapper">
                <p>{label}</p>
                <ArrowIcon cls="icon--sm" />
              </Link>
            )}
          </div>
          <div className="txt-wrapper">
            <h1 className="heading-1 head">{title}</h1>
          </div>
        </div>
      </section>
    </>
  );
}
