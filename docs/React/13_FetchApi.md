# 13 - Consumir Fetch API Pública

Consumir dados da API [REST Countries](https://restcountries.com), que fornece informações sobre países. Aqui está o código atualizado:

## 1. Componente `CountryInfo.jsx`

```jsx
import { useState, useEffect } from 'react';

function CountryInfo() {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
     const [countryCode, setCountryCode] = useState('br'); // Código padrão: Brasil

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        
        if (!response.ok) {
          throw new Error('País não encontrado');
        }
        
        const data = await response.json();
        setCountry(data[0]); // A API retorna um array, pegamos o primeiro item
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [countryCode]);

  const handleCountryChange = (e) => {
    setCountryCode(e.target.value.toLowerCase());
  };

  if (loading) return <div className="loading">Carregando dados do país...</div>;
  if (error) return <div className="error">Erro: {error}</div>;

  return (
    <div className="country-info">
      <h1>Informações do País</h1>
      
      <div className="country-selector">
        <label htmlFor="countryCode">Digite o código de um país (ex: br, us, fr): </label>
        <input 
          id="countryCode"
          type="text" 
          value={countryCode}
          onChange={handleCountryChange}
          maxLength="2"
        />
      </div>

      {country && (
        <div className="country-details">
          <h2>{country.name.common}</h2>
          <img 
            src={country.flags.png} 
            alt={`Bandeira de ${country.name.common}`} 
            style={{ width: '100px' }}
          />
          <p><strong>Capital:</strong> {country.capital?.[0] || 'Não informada'}</p>
          <p><strong>População:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Região:</strong> {country.region}</p>
          <p><strong>Idiomas:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'Não informado'}</p>
          <p><strong>Moeda:</strong> {country.currencies ? Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(', ') : 'Não informado'}</p>
        </div>
      )}
    </div>
  );
}

export default CountryInfo;
```

## 2. Estilos básicos (opcional)

Você pode adicionar este CSS no arquivo `App.css`:

```css
.country-info {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.country-selector {
  margin: 20px 0;
}

.country-selector input {
  padding: 8px;
  margin-left: 10px;
}

.country-details {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.loading {
  color: #666;
  font-style: italic;
}

.error {
  color: #d32f2f;
  font-weight: bold;
}
```

## 3. Como usar no `App.jsx`

```jsx
import './App.css';
import CountryInfo from './CountryInfo';

function App() {
  return (
    <div className="App">
      <CountryInfo />
    </div>
  );
}

export default App;
```

## Funcionalidades deste exemplo:

1. Consome a API REST Countries (https://restcountries.com)
2. Permite buscar informações de qualquer país digitando seu código (ex: 'br' para Brasil, 'us' para EUA)
3. Exibe informações como:
   - Nome do país
   - Bandeira
   - Capital
   - População
   - Região
   - Idiomas
   - Moedas

## Melhorias possíveis:

1. Adicionar um dropdown com os países disponíveis
2. Implementar cache das requisições
3. Adicionar mais detalhes do país
4. Tratar melhor os erros de rede

Para testar, basta digitar códigos de países como:
- br (Brasil)
- us (Estados Unidos)
- fr (França)
- jp (Japão)
- etc.