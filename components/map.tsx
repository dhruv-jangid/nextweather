"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvent,
  Tooltip,
} from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import customMarker from "@/public/images/marker.png";
import { useLocation } from "@/lib/locationContext";

export default function Map() {
  const { location, setLocation } = useLocation();

  const ClickHandler = () => {
    useMapEvent("click", (e) => {
      const { lat, lng } = e.latlng;
      setLocation([lat, lng]);
    });
    return null;
  };

  const LocationUpdater = ({ location }: { location: LatLngExpression }) => {
    const map = useMap();

    useEffect(() => {
      if (location) {
        map.flyTo(location, 14, { animate: true, duration: 1.5 });
      }
    }, [location, map]);

    return null;
  };

  const customIcon = new L.Icon({
    iconUrl: customMarker.src,
    iconSize: [36, 36],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className="flex flex-col justify-between gap-4">
      <MapContainer
        center={location}
        zoom={14}
        className="min-h-96 w-full rounded-4xl border border-sky-900/30 focus:outline-none"
        attributionControl={false}
        minZoom={3}
        maxZoom={18}
        worldCopyJump={true}
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ClickHandler />
        <LocationUpdater location={location} />
        {location && (
          <Marker position={location} icon={customIcon}>
            <Tooltip>
              Latitude: {location[0]} <br />
              Longitude: {location[1]}
            </Tooltip>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
