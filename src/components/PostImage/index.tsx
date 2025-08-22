import Image from "next/image";

interface PostImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function PostImage({ src, alt, width, height }: PostImageProps) {
  return (
    <>
      <div className="postimage-container">
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
    </>
  );
}
