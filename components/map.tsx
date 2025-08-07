"use client";

import {
  useMap,
  Marker,
  Tooltip,
  TileLayer,
  useMapEvent,
  MapContainer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { Icon, LatLngExpression } from "leaflet";
import customMarker from "@/public/images/marker.png";
import { useLocation } from "@/context/locationProvider";

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

  const customIcon = new Icon({
    iconUrl: customMarker.src,
    iconSize: [36, 36],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className="flex flex-col justify-between gap-4 z-0">
      <MapContainer
        center={location}
        zoom={14}
        className="min-h-96 w-full rounded-4xl border border-accent-foreground/30 focus:outline-none shadow-lg"
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
