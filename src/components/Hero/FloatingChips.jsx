import "./FloatingChips.css";

const CHIPS = [
  {
    id: "gcp",
    icon: "★",
    label: "Google Certified",
    sub: "Authorized Career Tracks",
    posClass: "chip-pos-top-right",
    depth: 1.2,
  },
  {
    id: "coe",
    icon: "🔬",
    label: "75+ CoE Labs",
    sub: "Turnkey Installations",
    posClass: "chip-pos-mid-right",
    depth: 0.9,
  },
  {
    id: "students",
    icon: "👥",
    label: "5,00,000+ Students",
    sub: "Campus-to-Corporate",
    posClass: "chip-pos-bot-right",
    depth: 1.4,
  },
  {
    id: "spatial",
    icon: "🥽",
    label: "AR / VR Lab",
    sub: "Spatial Metaverse Bay",
    posClass: "chip-pos-top-left",
    depth: 0.7,
  },
];

export default function FloatingChips({ mouseOffset = { x: 0, y: 0 } }) {
  return (
    <div className="floating-chips-layer" aria-hidden="true">
      {CHIPS.map((chip) => {
        const xOffset = mouseOffset.x * chip.depth * 0.4;
        const yOffset = mouseOffset.y * chip.depth * 0.4;

        return (
          <div
            key={chip.id}
            className={`hero-floating-chip ${chip.posClass}`}
            style={{
              transform: `translate3d(${xOffset}px, ${yOffset}px, 0)`,
            }}
          >
            <span className="chip-icon-badge">{chip.icon}</span>
            <div className="chip-text-wrap">
              <strong className="chip-title">{chip.label}</strong>
              <span className="chip-sub">{chip.sub}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
