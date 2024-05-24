import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { Loading } from "../Countries/Loading/Loading";
import { Error } from "../Countries/Error";
import { useNavigate } from "react-router";
import { fetchCountry } from "../../features/CountryDetails/CountrySlice";
import "./country.css"
import back from "./back (1).png"
import { useEffect, useState } from "react";
function Countrys() {
  const country = useAppSelector((state) => state.country);
  const theme = useAppSelector((state) => state.theme);
  const dispatch=useAppDispatch()
  const navigate = useNavigate();
    const [name,setName]=useState("")
    useEffect(()=>{
        const name=localStorage.getItem("name")
        const names=name?JSON.parse(name):undefined
        dispatch(fetchCountry(names))

    },[])
  console.log(country);

  const nativeNameKey = country.country.name.nativeName
    ? Object.keys(country.country.name.nativeName)[0]
    : null;

  const nativeName = nativeNameKey
    ? country.country.name.nativeName[nativeNameKey].common
    : "N/A";

  return (
    <div>
      {country.loading && <Loading />}
      <div>
          <button style={{backgroundColor:theme.boxBackGroundColor, color:theme.color}} className="back-button" onClick={() => navigate(-1)}>
            <img className="back" src={back} alt="back"/>
            Back</button>
        </div>
      {!country.loading && country.country.name.common && (
        <div className="details">
          <div>
              <img className="flags" src={country.country.flags.svg} alt={country.country.flags.alt} />
          </div>
          <div className="contents">
          <div>
            <h4  style={{ color: theme.boxColor }}>{country.country.name.common}</h4>
          </div>
          <div >
            <div className="content">
              <div style={{ color: theme.boxColor }}>Native Name:&nbsp;</div>
              <div style={{ color: theme.color }}>{nativeName}</div>
            </div>
            <div className="content">
              <div style={{ color: theme.boxColor }}>Population:&nbsp;</div>
              <div style={{ color: theme.color }}>{country.country.population}</div>
            </div>
            <div className="content">
              <div style={{ color: theme.boxColor }}>Region:&nbsp;</div>
              <div style={{ color: theme.color }}>{country.country.region}</div>
            </div>
            <div className="content">
              <div style={{ color: theme.boxColor }}>Sub Region:&nbsp;</div>
              <div style={{ color: theme.color }}>{country.country.subregion}</div>
            </div>
            <div className="content">
              <div style={{ color: theme.boxColor }}>Capital:&nbsp;</div>
              <div style={{ color: theme.color }}>{country.country.capital.join(", ")}</div>
            </div>
          </div>
          
          </div>
          <div className="contents">
            <div className="content">
              <div style={{ color: theme.boxColor }}>Currencies:&nbsp;</div>
              <div style={{ color: theme.color }}>
                {Object.keys(country.country.currencies).map(
                  (key) => country.country.currencies[key].name
                ).join(", ")}
              </div>
             
            </div>
            <div className="content">
            <div style={{ color: theme.boxColor }}>languages:&nbsp;</div>

            <div style={{ color: theme.color }}>
                {Object.keys(country.country.languages).map(
                  (key) => country.country.languages[key]
                ).join(", ")}
              </div>
              </div>
          </div>
        </div>
      )}
      {!country.loading && country.error && <Error errorMsg={country.error} />}
    </div>
  );
}

export default Countrys;
