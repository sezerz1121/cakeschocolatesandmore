// Chef-duck mascot. All ink outlines, flat pastel fills — matches the
// hand-drawn doodle look used across the site's illustrations.
export default function Duck({ className = "" }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* wing */}
      <path
        d="M88 165c-14 4-24 16-22 30 10 6 24 2 30-10"
        fill="#F5B93F"
        stroke="#2B2145"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* body */}
      <ellipse
        cx="118"
        cy="152"
        rx="72"
        ry="62"
        fill="#FFD966"
        stroke="#2B2145"
        strokeWidth="5"
      />
      {/* belly patch */}
      <ellipse cx="112" cy="168" rx="34" ry="26" fill="#FFF6DC" opacity="0.8" />
      {/* head */}
      <circle
        cx="153"
        cy="93"
        r="50"
        fill="#FFD966"
        stroke="#2B2145"
        strokeWidth="5"
      />
      {/* cheek blush */}
      <circle cx="138" cy="108" r="9" fill="#FF96B8" opacity="0.75" />
      {/* beak */}
      <path
        d="M195 88c14-2 24 3 26 11s-8 15-22 15c-8 0-13-4-14-11"
        fill="#F5B93F"
        stroke="#2B2145"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      {/* eye */}
      <circle cx="168" cy="82" r="6.5" fill="#2B2145" />
      <circle cx="170.5" cy="79.5" r="2" fill="#FFFDF7" />
      {/* chef hat band */}
      <rect
        x="112"
        y="48"
        width="66"
        height="22"
        rx="11"
        fill="#FFFDF7"
        stroke="#2B2145"
        strokeWidth="5"
      />
      {/* chef hat poof */}
      <path
        d="M114 50c-10-8-8-26 8-28 2-10 18-12 22-2 8-8 22-2 20 8 12-2 18 12 8 20 4 8-2 16-10 14 2 8-8 14-14 8-4 8-16 6-18-2-10 6-20-2-16-10-8 0-10-6-6-8"
        fill="#FFFDF7"
        stroke="#2B2145"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      {/* feet */}
      <path
        d="M96 210c-2 8-10 12-18 10M138 212c2 8 10 12 18 10"
        stroke="#2B2145"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
