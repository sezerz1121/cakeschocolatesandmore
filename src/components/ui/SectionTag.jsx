const colors = {
  yellow: "bg-yellow",
  pink: "bg-pink",
  mint: "bg-mint",
  white: "bg-white",
};

export default function SectionTag({ children, color = "yellow", className = "" }) {
  return (
    <span
      className={`inline-block -rotate-2 rounded-full ink-outline ${colors[color]} px-5 py-1.5 font-hand text-xl font-semibold text-ink ${className}`}
    >
      {children}
    </span>
  );
}
