import Image from "next/image";

interface CoverProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function StaticCover({ src, alt, width, height }: CoverProps) {
  return (
    <>
      <div className="static-container">
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
    </>
  );
}
