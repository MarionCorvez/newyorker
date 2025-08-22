// import Image from "next/image";
import Link from "next/link";
// import Contact from "@/app/ui/Contact";

export default function CookieBanner() {
  return (
    <aside>
      <section className="cookie-banner theme--light">
        <p className="content">
          By clicking "Accept All Cookies", you agree to the storing of cookies
          on your device to analyze site usage. View our{" "}
          <a className="link" href="/#">
            Privacy Policy
          </a>
        </p>
        <div className="actions">
          <Link className="link" href={"/#"}>
            Preferences
          </Link>
          <button className="button">Deny</button>
          <button className="button is--dark theme--dark">Accept</button>
        </div>
      </section>
    </aside>
  );
}
