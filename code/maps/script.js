// Coordenadas de localização inicial (São Paulo)
const latitude = -23.704761;
const longitude = -46.69923;

// Inicializando o mapa com o Leaflet
const map = L.map('map').setView([latitude, longitude], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

async function findNearbyPlaces() {
    const type = document.getElementById('place-type').value;
    const url = `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="${type}"](around:10000,${latitude},${longitude});out;`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        document.getElementById('results').innerHTML = '<p>Erro ao buscar dados. Tente novamente.</p>';
    }
}

function displayResults(data) {
    const resultsContainer = document.getElementById('results');

    resultsContainer.innerHTML = ''; // Limpar resultados anteriores
    map.eachLayer((layer) => { if (layer instanceof L.Marker) map.removeLayer(layer); }); // Remover marcadores anteriores

    if (data.elements.length === 0) {
        resultsContainer.innerHTML = '<p>Nenhum local encontrado.</p>';
        return;
    }

    data.elements.forEach(element => {

        const name = element.tags.name || 'Nome não disponível';
        const address = element.tags['addr:street'] || 'Endereço não disponível';

        // Exibir resultados em texto
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `<strong>${name}</strong><br>Endereço: ${address}<br>Latitude: ${element.lat}, Longitude: ${element.lon}`;
        resultsContainer.appendChild(resultItem);

        // Adicionar marcador no mapa
        const marker = L.marker([element.lat, element.lon]).addTo(map);
        marker.bindPopup(`<strong>${name}</strong><br>Endereço: ${address}`).openPopup();
    });

    // Centralizar o mapa no último resultado encontrado
    const lastLocation = data.elements[data.elements.length - 1];
    map.setView([lastLocation.lat, lastLocation.lon], 13);
}