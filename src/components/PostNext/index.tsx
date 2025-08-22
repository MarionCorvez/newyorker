import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/components/ui/ArrowIcon";

export default function PostNext() {
  return (
    <>
      <section>
        <article key="9222" className="card card--background card--sticky">
          <Link href="" className="container">
            <div className="media-wrapper">
              <Image
                className="media"
                src="/images/cases/veynd.avif"
                alt="Picture of VEYND project"
                width="1280"
                height="720"
              />
            </div>
            <div className="txt-wrapper">
              <p>Next project / Temperley</p>
              <h2 className="head heading-3">
                A design makeover and migration from Magento to Shopify for
                British fashion favourite Temperley London
              </h2>
              <div className="link-wrapper">
                <p className="link">View case study</p>
                <ArrowIcon cls="icon-wrapper icon--sm" />
              </div>
            </div>
          </Link>
        </article>
      </section>
    </>
  );
}
