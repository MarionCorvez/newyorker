interface HeroProps {
  content: any;
  active: string;
  txt: string;
  title: string;
}

export default function Hero({ content, active, txt, title }: HeroProps) {
  return (
    <>
      <section className="intro-container theme--black">
        <hgroup className="intro">
          {content && (
            <p className="ariane">
              <span className="is-active">{active}</span> {txt}
            </p>
          )}
          <h1 className="heading-1 title">{title}</h1>
        </hgroup>
      </section>
    </>
  );
}
