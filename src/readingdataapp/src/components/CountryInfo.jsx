import { useState, useEffect } from 'react';

function CountryInfo() {
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countryCode, setCountryCode] = useState('br');

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
  )

}

export default CountryInfo;