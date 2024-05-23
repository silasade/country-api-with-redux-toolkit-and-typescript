import { useSelector } from "react-redux"
import { useAppDispatch, useAppSelector } from "../../app/Hooks"
import { fetchCountries } from "../../features/Countries/CountriesSlice"
import { EventHandler, FormEvent, useState } from "react"
import arrow from "./down-arrow.png"
import { fetchCountry } from "../../features/CountryDetails/CountrySlice"
import "./filter.css"
import { useNavigate } from "react-router"
import { Modal } from "../Modal/Modal"
export const Filter=()=>{
    const [filter,showFilter]=useState(false)
    const [modal,setModal]=useState(false)
    const filterValues=["europe", "americas", "africa","oceania","asia"]
    const [name,setName]=useState("")
    const filters=filterValues.map(item=>(
        <li onClick={()=>handleFilters(item)}>{item.charAt(0).toUpperCase()+item.slice(1)}</li>
    ))
    const theme=useAppSelector(state=>state.theme)
   const country = useAppSelector((state) => state.country);
    const navigate=useNavigate()
    const dispatch=useAppDispatch()
    function handleFilter(){
        showFilter(!filter)
    }
    function handleFilters(item:string){
        showFilter(!filter)
        dispatch(fetchCountries(item))
    }
    function handleSubmit(event:FormEvent){
        event.preventDefault()
        dispatch(fetchCountry(name))
        if (!country.error.length){
            localStorage.setItem("name",JSON.stringify(name))
            navigate('/country')
        }
        else{
            setModal(true)
        }
    }
    function handleShow(){
        setModal(false)
    }
    document.body.style.opacity=modal? '0.5':'1'
    document.addEventListener("click",function(event){
        const target =event.target as Node
        if ((!document.querySelector(".button")?.contains(target) && !document.querySelector(".filters")?.contains(target))){
            showFilter(false)
        }
    })
    return(
        <div className="filter">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} name="" placeholder="Search for a country" id="" />
            </form>
        <div>
            <button className="button" style={{backgroundColor:theme.boxBackGroundColor, color:theme.boxColor}} onMouseEnter={handleFilter}  onClick={handleFilter}>Filter by Region<img width="20px" src={arrow}/> </button>
            &nbsp;
            {
            filter&&
            <div className="filters" style={{backgroundColor:theme.boxBackGroundColor, color:theme.boxColor}}>
            {filters}
            </div>
            }
        {modal && <Modal name={name} handleShow={handleShow} show={modal}/>}
        </div>
        </div>
    )
}