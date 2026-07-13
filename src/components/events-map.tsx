import { useEffect, useMemo, useRef } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from "react-leaflet";
import type { LatLngBoundsExpression } from "leaflet";

type EventPin = {
  id: string;
  name: string;
  location: string;
  lat: number;
  lng: number;
  tier: string;
};

type Props = {
  events: EventPin[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  tierColor: Record<string, string>;
};

function FitBounds({ events }: { events: EventPin[] }) {
  const map = useMap();
  useEffect(() => {
    if (events.length === 0) return;
    if (events.length === 1) {
      map.setView([events[0].lat, events[0].lng], 4, { animate: true });
      return;
    }
    const bounds: LatLngBoundsExpression = events.map(
      (e) => [e.lat, e.lng] as [number, number]
    );
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 5 });
  }, [events, map]);
  return null;
}

export default function EventsMap({
  events,
  selectedId,
  onSelect,
  tierColor,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initial = useMemo<[number, number]>(() => [20, 10], []);

  return (
    <div ref={containerRef} className="h-full w-full">
      <MapContainer
        center={initial}
        zoom={2}
        minZoom={2}
        worldCopyJump
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", background: "#FAFAFA" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <FitBounds events={events} />
        {events.map((e) => {
          const color = tierColor[e.tier] ?? "#EA088C";
          const isSel = e.id === selectedId;
          return (
            <CircleMarker
              key={e.id}
              center={[e.lat, e.lng]}
              radius={isSel ? 12 : 8}
              pathOptions={{
                color: "#fff",
                weight: 2,
                fillColor: color,
                fillOpacity: 0.95,
              }}
              eventHandlers={{
                click: () => onSelect(e.id),
                keydown: (ev) => {
                  const key = (ev.originalEvent as KeyboardEvent).key;
                  if (key === "Enter" || key === " ") onSelect(e.id);
                },
              }}
            >
              <Tooltip direction="top" offset={[0, -6]} opacity={1}>
                <span style={{ fontFamily: "var(--font-sans)" }}>
                  <strong>{e.name}</strong>
                  <br />
                  <span style={{ color: "#575757" }}>{e.location}</span>
                </span>
              </Tooltip>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}