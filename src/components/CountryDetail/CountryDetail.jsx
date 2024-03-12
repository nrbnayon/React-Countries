import CountryData from "../CountryData/CountryData";

// const CountryDetail = ({
//   country,
//   handleVisitedCountry,
//   handleVisitedFlags,
// })

const CountryDetail = (props) => {
  return (
    <div>
      <h4>Country Detail</h4>
      <hr />
      {/* <CountryData
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      /> */}
      <CountryData {...props} />
      {/* shortcut */}
    </div>
  );
};

export default CountryDetail;
