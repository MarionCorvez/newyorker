const SvgArrow = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={9}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.77727 4.94978L5.48438 4.24268L4.77727 3.53557L1.24173 3.51667e-05L0.534628 0.707142L4.07016 4.24268L0.534628 7.77821L1.24173 8.48532L4.77727 4.94978Z"
    ></path>
  </svg>
);
export default SvgArrow;
