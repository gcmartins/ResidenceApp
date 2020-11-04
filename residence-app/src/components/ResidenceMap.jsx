import React from 'react';
import residenceService from '../services/residence';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.heat';

const ResidenceMap = () => {

    React.useEffect(() => {
        async function fetchData() {
            const request = await residenceService.getResidences();
            let result = request.data;
            let latCenter = [];
            let longCenter = [];
            let residents = result.map(element => {
                latCenter.push(element.latitude);
                longCenter.push(element.longitude);
                return [element.latitude, element.longitude, element.residents];
            });
            console.log(residents);
            var map = L.map('map').setView([0, 0], 6);

            if (latCenter.length !== 0) {
                map.fitBounds([
                    [Math.min(...latCenter), Math.min(...longCenter)],
                    [Math.max(...latCenter), Math.max(...longCenter)]
                ]);
            }

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            L.heatLayer(residents).addTo(map);
        }
        fetchData();
    }, []);

    return (
        <div id="map" style={{ height: '100vh' }}></div>
    );
};

export default ResidenceMap;