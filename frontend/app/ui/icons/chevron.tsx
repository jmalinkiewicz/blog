export default function ChevronIcon({
  to,
}: {
  to: "right" | "left" | "top" | "bottom";
}) {
  let rotate: "rotate-0" | "rotate-90" | "rotate-180" | "-rotate-90";

  switch (to) {
    case "right":
      rotate = "rotate-90";
      break;
    case "left":
      rotate = "-rotate-90";
      break;
    case "top":
      rotate = "rotate-0";
      break;
    case "bottom":
      rotate = "rotate-180";
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${rotate}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  );
}
