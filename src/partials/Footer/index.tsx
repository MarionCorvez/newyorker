// import Image from "next/image";
// import Contact from "@/app/ui/Contact";
import Link from "next/link";
import SvgLinkedin from "@/components/ui/Svg/SvgLinkedin";
import SvgInstagram from "@/components/ui/Svg/SvgInstagram";
import Newsletter from "@/components/Newsletter";

export default function Footer() {
  return (
    <>
      <footer className="theme--black footer">
        <Newsletter />
        <div className="footer-container">
          <div className="links-container">
            <div>
              <h2 className="heading-4">Telephone</h2>
              <Link href={"tel:+441480467916"} aria-label="Call us">
                +44 (0) 180 465 915
              </Link>
            </div>
            <div className="item-2">
              <h2 className="heading-4">General info</h2>
              <Link href={"mailto:info@agency"} aria-label="Send us an email">
                info@agency
              </Link>
            </div>
            <div className="item-3">
              <h2 className="heading-4">Project enquiries</h2>
              <Link
                href={"mailto:enquiries@agency?subject=Project%20enquiry"}
                aria-label="Send us an email"
              >
                enquiries@agency
              </Link>
            </div>
            <div className="item-4">
              <h2 className="heading-4">Careers</h2>
              <Link href={"/careers"} aria-label="Access to Careers page">
                Job openings
              </Link>
            </div>
          </div>
          <div className="social-container">
            <Link href={"/#"} aria-label="Visit our LinkedIn page">
              <SvgLinkedin />
            </Link>
            <Link href={"/#"} aria-label="Visit our Instagram page">
              <SvgInstagram />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
