import "./Country.css";

const Country = ({ country }) => {
  console.log(country);
  const { name, flags, population, area } = country;

  return (
    <div className="country">
      <h3>Capital: {name?.common}</h3>
      <img src={flags?.png} />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
    </div>
  );
};

export default Country;
