"use client";

const items = [
  "Carnatic Vocal",
  "Sugama Sangeetha",
  "Piano & Keyboard",
  "Guitar",
  "Violin",
  "Drums",
  "Community Sessions",
  "Performance Training",
];

export default function MarqueeBar() {
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative py-4 overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #5C120D 0%, #7C1410 50%, #5C120D 100%)",
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #5C120D, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, #5C120D, transparent)" }}
      />

      <div className="flex animate-marquee" style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-6 mx-6 flex-shrink-0">
            <span
              className="whitespace-nowrap"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase" as const,
                color: "rgba(255,245,235,0.55)",
                fontWeight: 500,
              }}
            >
              {item}
            </span>
            <span
              className="flex-shrink-0"
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "rgba(201,168,76,0.5)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
