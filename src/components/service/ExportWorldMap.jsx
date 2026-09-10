import { useMemo } from "react";
import {
  geoInterpolate,
  geoNaturalEarth1,
  geoPath,
} from "d3-geo";
import { feature } from "topojson-client";
import world from "world-atlas/countries-110m.json";

const WIDTH = 900;
const HEIGHT = 460;

const locations = {
  vietnam: {
    label: "VIETNAM",
    code: "VIETNAM",
    coordinates: [108.2772, 14.0583],
    labelOffset: [0, -27],
    labelWidth: 68,
    origin: true,
  },
  unitedStates: {
    label: "UNITED STATES",
    code: "USA",
    coordinates: [-98.5795, 39.8283],
    labelOffset: [-12, 22],
    labelWidth: 38,
  },
  canada: {
    label: "CANADA",
    code: "CAN",
    coordinates: [-106.3468, 56.1304],
    labelOffset: [0, -26],
    labelWidth: 38,
  },
  netherlands: {
    label: "NETHERLANDS",
    code: "NLD",
    coordinates: [5.2913, 52.1326],
    labelOffset: [-46, -20],
    labelWidth: 38,
  },
  germany: {
    label: "GERMANY",
    code: "DEU",
    coordinates: [10.4515, 51.1657],
    labelOffset: [26, -6],
    labelWidth: 38,
  },
  poland: {
    label: "POLAND",
    code: "POL",
    coordinates: [19.1451, 51.9194],
    labelOffset: [54, -22],
    labelWidth: 38,
  },
  hungary: {
    label: "HUNGARY",
    code: "HUN",
    coordinates: [19.5033, 47.1625],
    labelOffset: [38, 22],
    labelWidth: 38,
  },
  israel: {
    label: "ISRAEL",
    code: "ISR",
    coordinates: [34.8516, 31.0461],
    labelOffset: [22, 24],
    labelWidth: 38,
  },
  japan: {
    label: "JAPAN",
    code: "JPN",
    coordinates: [138.2529, 36.2048],
    labelOffset: [24, -26],
    labelWidth: 38,
  },
  southKorea: {
    label: "SOUTH KOREA",
    code: "KOR",
    coordinates: [127.7669, 35.9078],
    labelOffset: [-32, -14],
    labelWidth: 38,
  },
  taiwan: {
    label: "TAIWAN",
    code: "TWN",
    coordinates: [120.9605, 23.6978],
    labelOffset: [-30, 20],
    labelWidth: 38,
  },
  australia: {
    label: "AUSTRALIA",
    code: "AUS",
    coordinates: [133.7751, -25.2744],
    labelOffset: [0, -26],
    labelWidth: 38,
  },
};

const marketCountryIds = new Set([
  "036", "124", "158", "276", "348",
  "376", "392", "410", "528", "616", "840",
]);

const animatedDestinations = new Set([
  "unitedStates", "germany", "japan", "australia",
]);

/* Great-circle interpolation, then bow the path outward
   perpendicular to the chord so it reads as a flight arc
   instead of a flat line on the projection. */
function createArcRoute(projection, from, to) {
  const interpolate = geoInterpolate(from, to);
  const rawPoints = Array.from({ length: 64 }, (_, i) =>
    projection(interpolate(i / 63))
  ).filter(Boolean);

  if (rawPoints.length < 2) return "";

  const [x1, y1] = rawPoints[0];
  const [x2, y2] = rawPoints[rawPoints.length - 1];
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const bow = Math.min(dist * 0.14, 46);

  const nx = -dy / (dist || 1);
  const ny = dx / (dist || 1);

  const bowed = rawPoints.map(([x, y], i) => {
    const t = i / (rawPoints.length - 1);
    const lift = Math.sin(Math.PI * t) * bow;
    return [x + nx * lift, y + ny * lift];
  });

  return (
    "M" +
    bowed
      .map(([x, y], i) => (i === 0 ? `${x},${y}` : `L${x},${y}`))
      .join(" ")
  );
}

export default function ExportWorldMap() {
  const { countries, path, projection } = useMemo(() => {
    const projection = geoNaturalEarth1().fitExtent(
      [[24, 22], [WIDTH - 24, HEIGHT - 22]],
      { type: "Sphere" }
    );
    const path = geoPath(projection);
    const countries = feature(world, world.objects.countries).features;
    return { countries, path, projection };
  }, []);

  const destinationEntries = Object.entries(locations).filter(
    ([key]) => key !== "vietnam"
  );

  const routes = destinationEntries.map(([key, location], index) => ({
    id: key,
    path: createArcRoute(
      projection,
      locations.vietnam.coordinates,
      location.coordinates
    ),
    animated: animatedDestinations.has(key),
    delay: `${(index % 4) * 0.45}s`,
    duration: `${3.4 + (index % 3) * 0.45}s`,
  }));

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="VinEco export network from Vietnam to eleven international markets"
        className="block h-auto w-full vineco-export-map"
      >
        <defs>
          <radialGradient id="vinecoOceanBg" cx="52%" cy="43%" r="78%">
            <stop offset="0%" stopColor="#FBF5E8" />
            <stop offset="55%" stopColor="#F5EFE0" />
            <stop offset="100%" stopColor="#EAE5D4" />
          </radialGradient>

          <pattern
            id="vinecoOceanGrain"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.6" fill="#0F2F24" opacity="0.02" />
          </pattern>

          <radialGradient id="vinecoVnGlow">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity=".42" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>

          <filter id="vinecoMapShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#0F2F24" floodOpacity=".06" />
          </filter>
        </defs>

        <rect x="0" y="0" width={WIDTH} height={HEIGHT} fill="url(#vinecoOceanBg)" />
        <rect x="0" y="0" width={WIDTH} height={HEIGHT} fill="url(#vinecoOceanGrain)" />

        <g transform="translate(26 25)">
          <rect width="116" height="28" rx="14" fill="#0F2F24" />
          <circle cx="15" cy="14" r="3.2" fill="#F59E0B" />
          <text x="27" y="17.5" fill="#FFFFFF" fontSize="9.5" fontWeight="800" letterSpacing=".08em">
            11 MARKETS
          </text>
        </g>

        <g filter="url(#vinecoMapShadow)">
          {countries.map((country) => {
            const countryCode = String(country.id).padStart(3, "0");
            const isVietnam = countryCode === "704";
            const isMarket = marketCountryIds.has(countryCode);
            return (
              <path
                key={country.id}
                d={path(country)}
                fill={isVietnam ? "#F59E0B" : isMarket ? "#C4CEC0" : "#DDDCCE"}
                stroke="#F5EFE4"
                strokeWidth="0.9"
                style={{ transition: "fill .3s ease" }}
              />
            );
          })}
        </g>

        {routes.map((route) => (
          <g key={route.id}>
            <path
              d={route.path}
              fill="none"
              stroke="#F59E0B"
              strokeWidth="5"
              strokeLinecap="round"
              opacity=".07"
            />
            <path
              d={route.path}
              fill="none"
              stroke="#F59E0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="2 7"
              opacity=".72"
            />
            {route.animated && (
              <circle r="3.2" fill="#0F2F24" stroke="#FAF8F5" strokeWidth="1.1">
                <animateMotion
                  begin={route.delay}
                  dur={route.duration}
                  repeatCount="indefinite"
                  path={route.path}
                />
              </circle>
            )}
          </g>
        ))}

        {Object.entries(locations).map(([key, location]) => {
          const point = projection(location.coordinates);
          if (!point) return null;
          const [x, y] = point;
          const origin = Boolean(location.origin);
          const [offsetX, offsetY] = location.labelOffset ?? [0, -24];
          const labelX = x + offsetX;
          const labelY = y + offsetY;

          return (
            <g key={key} className="vineco-map-marker">
              <title>{location.label}</title>

              {origin && (
                <>
                  <circle cx={x} cy={y} r="31" fill="url(#vinecoVnGlow)" />
                  <circle cx={x} cy={y} r="12" fill="none" stroke="#F59E0B" strokeWidth="1.5" opacity=".6">
                    <animate attributeName="r" values="9;20" dur="2.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values=".6;0" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                </>
              )}

              <line
                x1={x} y1={y} x2={labelX} y2={labelY - 2}
                stroke="#0F2F24" strokeWidth=".8" strokeDasharray="2 3" opacity=".22"
                className="vineco-map-marker__leader"
              />

              <rect
                x={labelX - location.labelWidth / 2}
                y={labelY - 11}
                width={location.labelWidth}
                height="18"
                rx="9"
                fill={origin ? "#0F2F24" : "#FFFFFF"}
                stroke={origin ? "#0F2F24" : "#1E2A24"}
                strokeOpacity={origin ? "1" : ".12"}
                className="vineco-map-marker__chip"
              />

              <text
                x={labelX} y={labelY + 1.5}
                textAnchor="middle"
                fill={origin ? "#FFFFFF" : "#0F2F24"}
                fontSize={origin ? "9.5" : "8.5"}
                fontWeight="800"
                letterSpacing=".045em"
              >
                {location.code}
              </text>

              <circle
                cx={x} cy={y}
                r={origin ? 7 : 4.7}
                fill="#F59E0B"
                stroke="#FAF8F5"
                strokeWidth="2"
                className="vineco-map-marker__dot"
              />
              <circle cx={x} cy={y} r={origin ? 2 : 1.45} fill="#0F2F24" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}