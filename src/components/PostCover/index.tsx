import Image from "next/image";

interface PostCoverProps {
  image: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  content: string;
}

export default function PostCover({
  image,
  alt,
  width,
  height,
  title,
  content,
}: PostCoverProps) {
  return (
    <>
      <section className="card card--cover card--background">
        <div className="container intro-container">
          <div className="media-wrapper">
            <Image
              className="media"
              src={image}
              alt={alt}
              width={width}
              height={height}
            />
          </div>
          <hgroup className="txt-wrapper intro">
            <p className="ariane">
              <span className="is-active">Case studies</span>{" "}
              <span className="is-active">Projects</span> {title}
            </p>
            <h1 className="head heading-1 title">{content}</h1>
          </hgroup>
        </div>
      </section>
    </>
  );
}
