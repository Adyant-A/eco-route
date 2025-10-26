import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1IjoiYWR5bWFwcyIsImEiOiJjbWR4b2R1MTUxdzhqMmxvbmFpYXF4azJkIn0.OYKbEcywM_i-3CNIMQmsdg";

export default function Mapbox ({ mapStyle, initialViewState, style, maxZoom, minZoom, start, destination }) {
    const mapContainer = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapContainer.current) return;
        mapRef.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: mapStyle,
            center: [initialViewState.longitude, initialViewState.latitude],
            zoom: initialViewState.zoom,
            maxZoom,
            minZoom,
        });
        mapRef.current.addControl(new mapboxgl.NavigationControl(), "top-right");

        return () => mapRef.current && mapRef.current.remove();
    }, [mapStyle, initialViewState, maxZoom, minZoom]);

    useEffect(() => {
        if (!mapRef.current || !start || !destination) return;

        // Fetch directions from Mapbox Directions API
        const getRoute = async () => {
            const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start.lng},${start.lat};${destination.lng},${destination.lat}?geometries=geojson&access_token=${mapboxgl.accessToken}`;
            const res = await fetch(url);
            const data = await res.json();
            const route = data.routes[0].geometry;

            // Remove previous route if exists
            if (mapRef.current.getSource('route')) {
                mapRef.current.removeLayer('route');
                mapRef.current.removeSource('route');
            }

            // Add route as a new source/layer
            mapRef.current.addSource('route', {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    properties: {},
                    geometry: route
                }
            });
            mapRef.current.addLayer({
                id: 'route',
                type: 'line',
                source: 'route',
                layout: { 'line-join': 'round', 'line-cap': 'round' },
                paint: { 'line-color': '#007EA7', 'line-width': 5 }
            });
            mapRef.current.fitBounds([
                [start.lng, start.lat],
                [destination.lng, destination.lat]
            ], {
                padding: { top: 120, bottom: 20, left: 20, right: 20 }
            });
        };

        getRoute();
    }, [start, destination]);

    return (
        <div
            ref={mapContainer}
            style={typeof style === "object" ? style : { width: "100%", height: "485px", borderRadius: "8px" , position: "relative" }}
        />
    );
}