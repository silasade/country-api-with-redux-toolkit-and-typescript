import { fetchCountries } from "../../../features/Countries/CountriesSlice";
import { useAppDispatch,useAppSelector } from "../../../app/Hooks";
import { useEffect } from "react";
import { Loading } from "../Loading/Loading";
import { Country } from "../Country/Country";
import { Error } from "../Error";
import "./Countries.css"
import { Filter } from "../../Filter/Filter"
export const Countries=()=>{
    const dispatch=useAppDispatch()
    const country=useAppSelector(state=>state.coutries)
    useEffect(()=>{
        dispatch(fetchCountries())
    },[])
    return(
        <div>
            <Filter/>
            {country.loading && <Loading/>}
            <div className="countries">
                {(!country.loading && country.countries.length>0) && country.countries.map(item=>(
                    <Country key={item.name.official} flag={item.flags.png} name={item.name.common} Region={item.region} capital={item.capital} population={item.population}/>
                ))}
            </div>
            
            {(!country.loading && country.error.length>0) &&<Error errorMsg={country.error}/>}
        </div>
    )
}