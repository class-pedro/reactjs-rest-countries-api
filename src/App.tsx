import styled from "styled-components";
import Header from "./components/Header.tsx/Header";
import SearchAndFilter from "./components/Header.tsx/SearchAndFilter";
import CountryCards from "./components/Header.tsx/CountryCards";
import { useEffect, useState } from "react";
import { getRestCountriesApi } from "./api/restCountries";

const AppContainer = styled.div`
  background-color: hsl(0, 0%, 98%);
  /* height: 100vh; */

  /* display: flex;
  flex-direction: column; */

  & > main {
    width: 90%;
    /* height: 90.4vh; */
    margin: auto;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;

    & > ul {
      width: 90%;
      margin: 40px 0 0 0;
      padding: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;

      @media (min-width: 768px) {
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }

`

interface CountryApiReturnProps {
  flags: {
    svg: string;
  }
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
}

function App() {

  const [countries, setCountry] = useState([]);
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');
  const [isDark, setIsDark] = useState(false);

  // Consumo da API
  async function getAPI() {
    await getRestCountriesApi()
      .then((response: any) => {
        // console.log(response.data);
        if (response.status === 200) {
          setCountry(response.data)
        } else {
          alert('error');
        }
      })
      .catch((error) => {
        console.error(error);
      })
  }

  useEffect(() => {
    getAPI()
  }, [])
  // Consumo da API FIM

  // Filter
  const filteredCountries = countries.filter(
    (country: CountryApiReturnProps) => country.name.common.toLowerCase().includes(search.toLowerCase())
      && country.region.toLowerCase().includes(select.toLowerCase())
  )

  return (
    <AppContainer>
      <Header
        buttonText={isDark ? "Light Mode" : "Dark Mode"}
        displayMoonIcon={isDark ? "none" : "block"}
        displaySunIcon={isDark ? "block" : "none"}
      />
      <main>
        <SearchAndFilter
          searchValue={search}
          onSearchChange={(e: any) => {
            setSearch(e.target.value);
          }}
          onSelectChange={(e: any) => {
            setSelect(e.target.value);
          }}
        />
        <ul>
          {filteredCountries.map((country: CountryApiReturnProps) => (
            <CountryCards
              key={country.name.common}
              countryImage={country.flags.svg}
              countryName={country.name.common}
              countryPopulation={country.population}
              countryRegion={country.region}
              countryCapital={country.capital}
            />
          ))}
        </ul>
      </main>
    </AppContainer>
  )
}

export default App;