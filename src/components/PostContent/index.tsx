import ArrowIcon from "@/components/ui/ArrowIcon";
import Link from "next/link";

export default async function PostContent({
  isValue,
  isPartners,
}: {
  isValue: boolean;
  isPartners: boolean;
}) {
  if (isValue) {
    return (
      <section className="section-content">
        <h2 className="title heading-2">Our value added</h2>
        <ul className="list-assets">
          <li>Bespoke store features</li>
          <li>Tech integrations & optimisations</li>
          <li>Upsell features</li>
          <li>Unisex handling</li>
          <li>Retained services</li>
          <li>Flexibility for content creation</li>
          <li>Content curation templates</li>
          <li>Conversion rate optimisation</li>
          <li>Store switcher</li>
          <li>Addition of Algolia to improve search</li>
        </ul>
      </section>
    );
  } else if (isPartners) {
    return (
      <section className="section-content">
        <h2 className="title heading-2">In partners we trust</h2>
        <div className="panel-content">
          <p className="intro heading-4">
            VEYND runs a series of parallel international stores, powered by a
            number of key Shopify-connected technologies and partners.
          </p>
          <div className="card-partner">
            <h3 className="head heading-3">Algolia</h3>
            <p className="details">
              Algolia connects with your Shopify store product catalogue and
              collections to provide a search and navigation experience. Easily
              bring search autocomplete, typo tolerance, synonyms management,
              filters and facets, and many more to your customers, on any
              device.
            </p>
          </div>
          <div className="card-partner">
            <h3 className="head heading-3">Algolia</h3>
            <p className="details">
              Algolia connects with your Shopify store product catalogue and
              collections to provide a search and navigation experience. Easily
              bring search autocomplete, typo tolerance, synonyms management,
              filters and facets, and many more to your customers, on any
              device.
            </p>
          </div>
          <div className="card-partner">
            <h3 className="head heading-3">Algolia</h3>
            <p className="details">
              Algolia connects with your Shopify store product catalogue and
              collections to provide a search and navigation experience. Easily
              bring search autocomplete, typo tolerance, synonyms management,
              filters and facets, and many more to your customers, on any
              device.
            </p>
          </div>
          <div className="card-partner">
            <h3 className="head heading-3">Algolia</h3>
            <p className="details">
              Algolia connects with your Shopify store product catalogue and
              collections to provide a search and navigation experience. Easily
              bring search autocomplete, typo tolerance, synonyms management,
              filters and facets, and many more to your customers, on any
              device.
            </p>
          </div>
          <div className="card-partner">
            <h3 className="head heading-3">Algolia</h3>
            <p className="details">
              Algolia connects with your Shopify store product catalogue and
              collections to provide a search and navigation experience. Easily
              bring search autocomplete, typo tolerance, synonyms management,
              filters and facets, and many more to your customers, on any
              device.
            </p>
          </div>
          <div className="card-partner">
            <h3 className="head heading-3">Algolia</h3>
            <p className="details">
              Algolia connects with your Shopify store product catalogue and
              collections to provide a search and navigation experience. Easily
              bring search autocomplete, typo tolerance, synonyms management,
              filters and facets, and many more to your customers, on any
              device.
            </p>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="section-content">
        <h2 className="title heading-2">Project Overview</h2>
        <div className="panel-content">
          <p className="intro heading-4">
            Sunspel runs a series of parallel international stores, powered by a
            number of key Shopify-connected technologies and partners.
          </p>
          <div className="txt-wrapper">
            <p className="details">
              Launched in early November 2023, the sportswear company offers
              alternative, darker sports pieces for the fashion-forward fitness
              fanatic that until now have been hard to find. Each garment is
              designed in moody tones with oversized silhouettes and structured
              tailoring. VEYND approached By Association Only to mirror this
              darker aesthetic online. We also maximised the brand’s opportunity
              to story-tell through full-page immersive campaign films and
              images.
            </p>

            <div className="link-wrapper">
              <Link href="#" prefetch={false} className="link">
                View live website
              </Link>
              <ArrowIcon cls="icon--sm" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
