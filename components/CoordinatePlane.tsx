import { WIDTH, HEIGHT, UNIT, ORIGIN_X, ORIGIN_Y } from "@/lib/graph";

const xNumbers = Array.from({ length: 21 }, (_, i) => i - 10);
const yNumbers = Array.from({ length: 13 }, (_, i) => i - 6);

export default function CoordinatePlane() {
  const verticalLines = Array.from({ length: 61 }, (_, i) => ORIGIN_X + (i - 30) * UNIT);
  const horizontalLines = Array.from({ length: 61 }, (_, i) => ORIGIN_Y + (i - 30) * UNIT);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {verticalLines.map((x) => (
          <line
            key={`v-${x}`}
            x1={x}
            y1={0}
            x2={x}
            y2={HEIGHT}
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="1"
          />
        ))}

        {horizontalLines.map((y) => (
          <line
            key={`h-${y}`}
            x1={0}
            y1={y}
            x2={WIDTH}
            y2={y}
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="1"
          />
        ))}

        <line x1={0} y1={ORIGIN_Y} x2={WIDTH} y2={ORIGIN_Y} stroke="black" strokeWidth="1.4" />
        <line x1={ORIGIN_X} y1={0} x2={ORIGIN_X} y2={HEIGHT} stroke="black" strokeWidth="1.4" />

        {xNumbers.map((num) => {
          const x = ORIGIN_X + num * UNIT;

          return (
            <g key={`x-${num}`}>
              <line x1={x} y1={ORIGIN_Y - 7} x2={x} y2={ORIGIN_Y + 7} stroke="black" />
              <text x={x} y={ORIGIN_Y + 28} textAnchor="middle" fontSize="15" fill="black">
                {num}
              </text>
            </g>
          );
        })}

        {yNumbers.map((num) => {
          const y = ORIGIN_Y - num * UNIT;

          return (
            <g key={`y-${num}`}>
              <line x1={ORIGIN_X - 7} y1={y} x2={ORIGIN_X + 7} y2={y} stroke="black" />
              {num !== 0 && (
                <text x={ORIGIN_X - 22} y={y + 5} textAnchor="end" fontSize="15" fill="black">
                  {num}
                </text>
              )}
            </g>
          );
        })}

        <text x={WIDTH - 35} y={ORIGIN_Y - 18} fontSize="26" fontStyle="italic" fill="black">
          x
        </text>

        <text x={ORIGIN_X + 16} y={35} fontSize="26" fontStyle="italic" fill="black">
          y
        </text>
      </svg>
    </div>
  );
}