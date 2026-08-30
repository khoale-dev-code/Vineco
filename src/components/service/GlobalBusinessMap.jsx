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
  },
  usa: {
    label: "USA",
    coordinates: [-98.5795, 39.8283],
  },
  japan: {
    label: "JAPAN",
    coordinates: [138.2529, 36.2048],
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
          <radialGradient id="vnGlow">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity=".35" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>

          <filter id="mapShadow">
            <feDropShadow
              dx="0"
              dy="5"
              stdDeviation="8"
              floodColor="#0F2F24"
              floodOpacity=".08"
            />
          </filter>
        </defs>

        {/* WORLD */}
        <g filter="url(#mapShadow)">
          {countries.map((country) => {
            const isVietnam =
              String(country.id) === "704";

            return (
              <path
                key={country.id}
                d={path(country)}
                fill={
                  isVietnam
                    ? "#F59E0B"
                    : "#D9DDD8"
                }
                stroke="#FAF8F5"
                strokeWidth="0.8"
              />
            );
          })}
        </g>

        {/* EXPORT ROUTES */}
        {routes.map((route) => (
          <path
            key={route.id}
            d={route.path}
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeDasharray="7 8"
            opacity=".9"
          />
        ))}

        {/* LOCATION MARKERS */}
        {Object.entries(locations).map(
          ([key, location]) => {
            const point = projection(
              location.coordinates,
            );

            if (!point) return null;

            const [x, y] = point;
            const vietnam = key === "vietnam";

            return (
              <g key={key}>
                {vietnam && (
                  <circle
                    cx={x}
                    cy={y}
                    r="28"
                    fill="url(#vnGlow)"
                  />
                )}

                <circle
                  cx={x}
                  cy={y}
                  r={vietnam ? 7 : 5}
                  fill="#F59E0B"
                  stroke="#FAF8F5"
                  strokeWidth="2"
                />

                <text
                  x={x}
                  y={y - 13}
                  textAnchor="middle"
                  fill={
                    vietnam
                      ? "#0F2F24"
                      : "#6A645D"
                  }
                  fontSize={vietnam ? 11 : 9}
                  fontWeight="800"
                  letterSpacing=".06em"
                >
                  {location.label}
                </text>
              </g>
            );
          },
        )}
      </svg>
    </div>
  );
}