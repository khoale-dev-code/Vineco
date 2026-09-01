import { useMemo } from "react";
import { geoInterpolate, geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import world from "world-atlas/countries-110m.json";

const WIDTH = 900;
const HEIGHT = 460;

const locations = {
  vietnam: {
    label: "VIETNAM",
    coordinates: [108.2772, 14.0583],
    labelWidth: 66,
  },
  usa: {
    label: "USA",
    coordinates: [-98.5795, 39.8283],
    labelWidth: 30,
  },
  japan: {
    label: "JAPAN",
    coordinates: [138.2529, 36.2048],
    labelWidth: 42,
  },
};

function createRoute(from, to) {
  const interpolate = geoInterpolate(from, to);

  return {
    type: "LineString",
    coordinates: Array.from({ length: 41 }, (_, index) =>
      interpolate(index / 40),
    ),
  };
}

export default function ExportWorldMap() {
  const { countries, path, projection } = useMemo(() => {
    const projection = geoNaturalEarth1()
      .fitExtent(
        [
          [24, 22],
          [WIDTH - 24, HEIGHT - 22],
        ],
        { type: "Sphere" },
      );

    const path = geoPath(projection);

    const countries = feature(
      world,
      world.objects.countries,
    ).features;

    return { countries, path, projection };
  }, []);

  const routes = [
    {
      id: "usa",
      path: path(
        createRoute(
          locations.vietnam.coordinates,
          locations.usa.coordinates,
        ),
      ),
    },
    {
      id: "japan",
      path: path(
        createRoute(
          locations.vietnam.coordinates,
          locations.japan.coordinates,
        ),
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="VinEco export network from Vietnam to USA and Japan"
        className="block h-auto w-full"
      >
        <defs>
          {/* Soft ocean backdrop behind the landmasses */}
          <radialGradient id="oceanBg" cx="50%" cy="42%" r="75%">
            <stop offset="0%" stopColor="#FBF4E4" />
            <stop offset="100%" stopColor="#F3EDE0" />
          </radialGradient>

          <radialGradient id="vnGlow">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity=".4" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>

          {/* Directional gradient so routes fade brighter near Vietnam */}
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity=".95" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity=".55" />
          </linearGradient>

          <filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="9"
              floodColor="#0F2F24"
              floodOpacity=".07"
            />
          </filter>
        </defs>

        {/* OCEAN BACKDROP */}
        <rect x="0" y="0" width={WIDTH} height={HEIGHT} fill="url(#oceanBg)" />

        {/* WORLD */}
        <g filter="url(#mapShadow)">
          {countries.map((country) => {
            const isVietnam = String(country.id) === "704";

            return (
              <path
                key={country.id}
                d={path(country)}
                fill={isVietnam ? "#F59E0B" : "#DEDCCE"}
                stroke="#F3EDE0"
                strokeWidth="0.9"
                style={{ transition: "fill .3s ease" }}
              />
            );
          })}
        </g>

        {/* EXPORT ROUTES */}
        {routes.map((route) => (
          <g key={route.id}>
            {/* soft under-glow */}
            <path
              d={route.path}
              fill="none"
              stroke="#F59E0B"
              strokeWidth="5"
              strokeLinecap="round"
              opacity=".12"
            />

            <path
              d={route.path}
              fill="none"
              stroke="url(#routeGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="1 8"
            />

            {/* travelling shipment dot */}
            <circle r="3.4" fill="#0F2F24">
              <animateMotion
                dur="3.2s"
                repeatCount="indefinite"
                path={route.path}
              />
            </circle>
          </g>
        ))}

        {/* LOCATION MARKERS */}
        {Object.entries(locations).map(([key, location]) => {
          const point = projection(location.coordinates);

          if (!point) return null;

          const [x, y] = point;
          const vietnam = key === "vietnam";

          return (
            <g key={key}>
              {vietnam && (
                <>
                  <circle cx={x} cy={y} r="30" fill="url(#vnGlow)" />
                  <circle
                    cx={x}
                    cy={y}
                    r="12"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="1.4"
                    opacity=".55"
                  >
                    <animate
                      attributeName="r"
                      values="9;18"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values=".55;0"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </>
              )}

              {/* legible label chip */}
              <rect
                x={x - location.labelWidth / 2}
                y={y - 25}
                width={location.labelWidth}
                height={15}
                rx="7.5"
                fill="#FAF8F5"
                stroke="#1E2A24"
                strokeOpacity=".08"
              />

              <text
                x={x}
                y={y - 14.5}
                textAnchor="middle"
                fill={vietnam ? "#0F2F24" : "#3D5245"}
                fontSize={vietnam ? 10.5 : 9}
                fontWeight="800"
                letterSpacing=".05em"
              >
                {location.label}
              </text>

              <circle
                cx={x}
                cy={y}
                r={vietnam ? 6.5 : 4.5}
                fill="#F59E0B"
                stroke="#FAF8F5"
                strokeWidth="2"
              />

              <circle cx={x} cy={y} r="1.6" fill="#0F2F24" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}