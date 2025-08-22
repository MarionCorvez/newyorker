const SvgMenuOpen = (
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 2.5h14v1H1v-1Zm0 5h14v1H1v-1Zm14 5H1v1h14v-1Z"
      fill="currentColor"
    ></path>
  </svg>
);
export default SvgMenuOpen;
