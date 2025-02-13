# 13_React - Mapas e Locais(Overpass, Nominatim e OpenStreetMap)

Para criar um site em Vite com React que encontre hospitais, delegacias, escolas e outros locais próximos usando um dropdown, podemos utilizar a **Geolocation API** para obter a posição do usuário e a **Overpass API** (baseada no OpenStreetMap) para buscar locais próximos. O Leaflet será usado para exibir um mapa interativo.

### Passo a Passo

1. **Configurar o projeto com Vite e React**.
2. **Adicionar as dependências** para Leaflet e React-Leaflet.
3. **Criar componentes** para o dropdown e para exibir os locais no mapa.

### 1. Criação do Projeto Vite com React

No terminal, execute os seguintes comandos:

```bash
# Instalar o Vite com template React
npm create vite@latest my-location-app --template react
cd my-location-app

# Instalar Leaflet e React-Leaflet
npm install leaflet react-leaflet
```

### 2. Código do Aplicativo

Com o projeto configurado, vamos criar os componentes necessários.

#### Estrutura do Projeto

```plaintext
my-location-app/
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── Dropdown.jsx
│   │   └── MapView.jsx
│   └── main.jsx
├── index.html
└── package.json
```

#### `App.jsx`

Este é o componente principal do aplicativo. Ele gerencia o estado para o tipo de local selecionado e a posição do usuário.

```jsx
import React, { useState, useEffect } from 'react';
import Dropdown from './components/Dropdown';
import MapView from './components/MapView';

function App() {
    const [userLocation, setUserLocation] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState('hospital');
    const [places, setPlaces] = useState([]);

    // Obter a localização do usuário
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                },
                () => alert('Não foi possível obter a localização.')
            );
        }
    }, []);

    // Buscar locais próximos usando Overpass API
    useEffect(() => {
        if (userLocation) {
            const fetchPlaces = async () => {
                const url = `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"="${selectedPlace}"](around:3000,${userLocation.lat},${userLocation.lon});out;`;
                const response = await fetch(url);
                const data = await response.json();
                setPlaces(data.elements || []);
            };
            fetchPlaces();
        }
    }, [userLocation, selectedPlace]);

    return (
        <div>
            <h1>Encontre Locais Próximos</h1>
            <Dropdown selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />
            {userLocation && <MapView userLocation={userLocation} places={places} />}
        </div>
    );
}

export default App;
```

#### `Dropdown.jsx`

Componente para selecionar o tipo de local no dropdown.

```jsx
import React from 'react';

const Dropdown = ({ selectedPlace, setSelectedPlace }) => {
    const handleChange = (event) => {
        setSelectedPlace(event.target.value);
    };

    return (
        <select value={selectedPlace} onChange={handleChange}>
            <option value="hospital">Hospital</option>
            <option value="police">Delegacia</option>
            <option value="school">Escola</option>
            <option value="restaurant">Restaurante</option>
            <option value="bank">Banco</option>
        </select>
    );
};

export default Dropdown;
```

#### `MapView.jsx`

Este componente exibe o mapa e adiciona marcadores para os locais encontrados.

```jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrigir ícones padrão do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapView = ({ userLocation, places }) => {
    return (
        <MapContainer center={[userLocation.lat, userLocation.lon]} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='© OpenStreetMap contributors' />

            {/* Marcador para a posição do usuário */}
            <Marker position={[userLocation.lat, userLocation.lon]}>
                <Popup>Você está aqui</Popup>
            </Marker>

            {/* Marcadores para os locais encontrados */}
            {places.map(place => (
                <Marker key={place.id} position={[place.lat, place.lon]}>
                    <Popup>
                        <strong>{place.tags.name || 'Nome não disponível'}</strong><br />
                        {place.tags['addr:street'] || 'Endereço não disponível'}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapView;
```

#### `main.jsx`

Este é o ponto de entrada do aplicativo.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

### Estilização Opcional (`index.css`)

Para estilizar o dropdown e o layout geral:

```css
body {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: auto;
    padding: 20px;
}
h1 {
    text-align: center;
}
select {
    padding: 10px;
    font-size: 16px;
    margin: 10px 0;
}
```

### Executar o Projeto

Após configurar o código, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Esse projeto exibirá um dropdown para selecionar o tipo de local (como hospital, delegacia, etc.) e um mapa interativo com a posição do usuário e os locais próximos encontrados.
