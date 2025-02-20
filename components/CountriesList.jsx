import React, { useEffect, useState } from "react";
// import countriesData from '../countriesData'
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  if (!countriesData.length) {
    return <CountriesListShimmer />;
  }

  // Filter countries by query and then sort them alphabetically by name (A to Z)
  const filteredAndSortedCountries = countriesData
    .filter(
      (country) =>
        country.name.common.toLowerCase().includes(query) ||
        country.region.toLowerCase().includes(query)
    )
    .sort((a, b) => a.name.common.localeCompare(b.name.common));

  return (
    <div className="countries-container">
      {filteredAndSortedCountries.map((country) => (
        <CountryCard
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.svg}
          population={country.population}
          region={country.region}
          capital={country.capital?.[0]}
          data={country}
        />
      ))}
    </div>
  );
}
