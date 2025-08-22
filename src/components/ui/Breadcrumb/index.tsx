import SvgArrow from "../Svg/SvgArrow";

export default async function Breadcrumb({ cls }: { cls: string }) {
  return (
    <>
      <div className={`icon-wrapper ${cls}`}>
        <SvgArrow className="icon" />
      </div>
    </>
  );
}
