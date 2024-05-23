import { useEffect, useState } from "react"
import { useAppDispatch,useAppSelector } from "../../app/Hooks"
import { modes } from "../../features/Theme/ThemeSlice"
import "./Navbar.css"
const Index=()=>{
    const [themes,setTheme]=useState(true)
    const theme=useAppSelector(state=>state.theme)
    const dispatch=useAppDispatch()
    const handleTheme=()=>{
        setTheme(!themes)
    }
    useEffect(()=>{
        dispatch(modes(themes))
    },[handleTheme])
    return (
        <div className="Navbar" style={{backgroundColor:theme.boxBackGroundColor, color:theme.boxColor}}>
            <div>
                <h3>Where in the world?</h3>
            </div>
            <div onClick={handleTheme} className="toggle">
                <img src={theme.img} alt="logo"/>
                <h4>{theme.mode}</h4>
            </div>
        </div>
    )
}
export default Index