// Small hand-drawn doodle accents (stars, swirls, underlines, dotted
// connectors) reused across sections. All strokes use currentColor so they
// can be recolored via a text-* Tailwind class from the parent.

export function Star({ className = "" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2c1.2 7 3 12.8 6 15.8s8.8 4.8 15.8 6c-7 1.2-12.8 3-15.8 6S22 40 20 40c-1.2-7-3-12.8-6-15.8S4.2 19.4-2.8 18.2c7-1.2 12.8-3 15.8-6S18.8 2 20 2z"
        transform="translate(2.8)"
        fill="currentColor"
      />
    </svg>
  );
}

export function Sparkle({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Swirl({ className = "" }) {
  return (
    <svg viewBox="0 0 60 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 20c0-10 8-18 18-18s16 7 16 14-6 12-13 12-11-5-11-10 4-9 9-9 8 3.5 8 7.5"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Squiggly underline, meant to sit just beneath a headline keyword.
export function Underline({ className = "" }) {
  return (
    <svg viewBox="0 0 220 18" preserveAspectRatio="none" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 12c24-10 45-10 60-3 18 8 36 8 55 0 20-9 42-9 60-1 16 7 30 7 41 1"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Curvy dotted connector used between "how it works" steps.
export function DottedArrow({ className = "" }) {
  return (
    <svg viewBox="0 0 160 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 30c30-28 90-28 130-14"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="1 10"
        strokeLinecap="round"
      />
      <path
        d="M120 10l16 6-9 15"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Heart({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 20.5S3 14.8 3 8.9C3 5.6 5.5 3.5 8.3 3.5c1.9 0 3.4 1 3.7 2.4.3-1.4 1.8-2.4 3.7-2.4C18.5 3.5 21 5.6 21 8.9c0 5.9-9 11.6-9 11.6z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Soft irregular blob used as a colored backdrop behind mascots/photos.
export function Blob({ className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M52 24c26-16 62-14 84 6 21 19 30 50 21 78-9 27-36 42-63 47-28 5-59-2-76-24S-3 78 12 54 26 40 52 24z"
      />
    </svg>
  );
}
