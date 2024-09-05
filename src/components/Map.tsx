import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

type MapsProps = {
    data: {
        location?: {
            lat?: number
            lng?: number
            region?: string
        }
    }
};

L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
});

const Map: React.FC<MapsProps> = ({data}) => {
    const longitude = data.location?.lng ?? -99.1276;
    const latitude = data.location?.lat ?? 19.4285;
    const region = data.location?.region ?? 'Mexico';
    const position: [number, number] = [latitude, longitude];
    return (
        <MapContainer center={position} zoom={13} style={{height: '100%', width: '100%'}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                    {region}
                </Popup>
            </Marker>
        </MapContainer>

    );
};

export default Map;