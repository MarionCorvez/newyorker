const SvgSearch = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Zm-1.126 4.582a6 6 0 1 1 .707-.707l3.773 3.771-.707.708-3.773-3.772Z"
    ></path>
  </svg>
);
export default SvgSearch;
