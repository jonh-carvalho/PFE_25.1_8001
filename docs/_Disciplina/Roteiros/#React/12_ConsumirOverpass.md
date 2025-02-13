# 12_Mapas e Locais(Overpass, Nominatim e OpenStreetMap)

Para adicionar um mapa com marcadores dos locais encontrados, podemos usar a biblioteca **Leaflet.js**, uma biblioteca de JavaScript para mapas interativos. Aqui está o código HTML e JavaScript atualizado que inclui um mapa e adiciona marcadores para cada local encontrado:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Locais Próximos</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" />
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: auto;
        }
        select, button {
            padding: 10px;
            font-size: 16px;
            margin-top: 10px;
        }
        #results {
            margin-top: 20px;
        }
        #map {
            height: 400px;
            width: 100%;
            margin-top: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .result-item {
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Encontre Locais Próximos</h1>
    <p>Selecione o tipo de local para encontrar hospitais, delegacias ou escolas próximas.</p>
  
    <label for="place-type">Tipo de Local:</label>
    <select id="place-type">
        <option value="hospital">Hospital</option>
        <option value="police">Delegacia</option>
        <option value="school">Escola</option>
    </select>
    <button onclick="findNearbyPlaces()">Buscar</button>

    <div id="results"></div>
    <div id="map"></div>

    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"></script>
    <script>
        // Coordenadas de localização inicial (São Paulo)
        const latitude = -23.55052;
        const longitude = -46.633308;
    
        // Inicializando o mapa com o Leaflet
        const map = L.map('map').setView([latitude, longitude], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        async function findNearbyPlaces() {
            const type = document.getElementById('place-type').value;
            const url = `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="${type}"](around:3000,${latitude},${longitude});out;`;

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
    </script>
</body>
</html>
```

### Explicação das Adições

1. **Leaflet CSS e JS**:

   - Importamos a biblioteca Leaflet com a URL para o CSS e JS, o que permite criar o mapa interativo.
2. **Mapa Inicial**:

   - Inicializamos o mapa com `L.map()` e configuramos para focar na localização inicial (São Paulo, SP). Usamos o `L.tileLayer` para carregar o mapa do OpenStreetMap.
3. **Marcadores de Resultados**:

   - Na função `displayResults`, além de exibir os locais encontrados em uma lista, adicionamos um marcador no mapa para cada local.
   - Usamos `L.marker()` para adicionar um marcador nas coordenadas de cada local. Com `bindPopup()`, cada marcador exibe o nome e o endereço ao ser clicado.
4. **Centralizar o Mapa**:

   - Após adicionar os marcadores, centralizamos o mapa na localização do último local encontrado.

Esse exemplo básico é funcional e pode ser aprimorado adicionando geolocalização automática e ajustando o zoom do mapa para cobrir todos os pontos ao mesmo tempo.
