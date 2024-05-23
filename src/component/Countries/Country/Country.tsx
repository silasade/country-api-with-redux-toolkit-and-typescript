import "./country.css"
import { useNavigate } from "react-router"
import { useAppSelector,useAppDispatch } from "../../../app/Hooks"
import { fetchCountry } from "../../../features/CountryDetails/CountrySlice"
type CountryProp={
    flag:string,
    name:string
    population:number
    Region: string
    capital:string
}
export const Country=({flag,name,population,Region,capital}:CountryProp)=>{
    const theme=useAppSelector(state=>state.theme)
    const dispatch=useAppDispatch()
    const navigate=useNavigate()
    function handleDetails(item:string){
        localStorage.setItem("name",JSON.stringify(item))
        navigate('/country')
    }
    
    return(
        <div className="country" style={{backgroundColor:theme.boxBackGroundColor}}>
            <div>
                <img className="flag" src={flag} alt="flag"/>
            </div>
            <div className="contents">
                <div>
                    <h4 onClick={()=>handleDetails(name)} style={{color:theme.boxColor}}>{name}</h4>
                </div>
                <div>
                    <div className="content">
                        <div  style={{color:theme.boxColor}}>Population:</div><div style={{color:theme.color}}>{population}</div>
                    </div>
                    <div className="content">
                        <div style={{color:theme.boxColor}}>Region:</div><div style={{color:theme.color}}>{Region}</div>
                    </div>
                    <div className="content">
                        <div style={{color:theme.boxColor}}>Capital:</div><div style={{color:theme.color}}>{capital}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}