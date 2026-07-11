const accents = {
  yellow: "bg-yellow/60",
  pink: "bg-pink/60",
  mint: "bg-mint/60",
  sky: "bg-sky",
};

// Photo tile with a soft pastel backdrop. Pass `image` to render real
// photography (object-cover, fills the tile); falls back to a big centered
// emoji when no image is available yet.
export default function PastelTile({ image, alt = "", emoji, accent = "yellow", className = "" }) {
  if (image) {
    return (
      <div className={`overflow-hidden ${accents[accent]} ${className}`}>
        <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${accents[accent]} ${className}`}>
      <span role="img" aria-hidden="true">
        {emoji}
      </span>
    </div>
  );
}
