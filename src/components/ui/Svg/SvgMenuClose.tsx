const SvgMenuClose = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)" stroke="currentColor">
      <path d="m1 1 14 14M15 1 1 15" fill="currentColor"></path>
    </g>
  </svg>
);
export default SvgMenuClose;
