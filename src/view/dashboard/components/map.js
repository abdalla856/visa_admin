import React from "react";
import WorldMap from "react-svg-worldmap";
import { getCode } from "country-list";
import { useSelector } from "react-redux";

const Map = () => {
  const mdata = [];
  const st = useSelector((state) => state.student);
  let countries = {
    country :'',
    value :0
  };
  let sum = 0;
  if (st.users !== undefined) {
    let res = [];

    st.users.forEach((user) => {
      console.log(user.HomeTown)
      if (getCode(user.HomeTown) === countries.country) {
        sum++
        countries.value =sum ;
      } else {
        sum = 0;
        sum++
        
        countries.value =sum ;
        countries.country =getCode(user.HomeTown) ;
      }
      console.log(countries);
      mdata.push({country : countries.country,value : countries.value});
      console.log(mdata)
    });

  }

  return (
    <WorldMap
      color="blue"
      className="world"
      value-suffix="people"
      size="lg"
      data={mdata}
      style={{ width: "500px" }}
    />
  );
};
export default Map;
