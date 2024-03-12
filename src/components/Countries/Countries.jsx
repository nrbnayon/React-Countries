import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const getData = await res.json();
      setCountries(getData);
    };
    fetchData();
  }, []);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountry = (country) => {
    // const { name } = country;
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const [visitedFlag, setVisitedFlag] = useState([]);
  const handleVisitedFlags = (flag) => {
    // console.log(flag);
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
  };

  //remove item from an array in a state
  // use filter to select all the element except the one you want to remove

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h5>My Visited Countries: {visitedCountries.length}</h5>

        <ol>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ol>
      </div>
      <div className="flag-container">
        {visitedFlag.map((flag, index) => (
          <img key={index} src={flag} />
        ))}
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
