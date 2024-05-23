import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import sun from "./brightness-high.svg"
import moon from "./moon.svg"
type InitialState={
    boxBackGroundColor:string
    backGroundColor:string
    color:string
    img:string
    mode:string
    boxColor:string
}
const initialState:InitialState={
    boxColor:"hsl(200, 15%, 8%)",
    boxBackGroundColor:"hsl(0, 0%, 98%)",
    backGroundColor:"white",
    color:"hsl(200, 15%, 8%)",
    img:sun,
    mode:"Light Mode"
}
const themeSlice=createSlice({
    name:"theme",
    initialState,
    reducers:{
        modes:((state:InitialState,actions:PayloadAction<boolean>)=>{
            state.boxColor=actions.payload?"hsl(200, 15%, 8%)": "hsl(0, 0%, 98%)"
            state.boxBackGroundColor=actions.payload?"white":"hsl(209, 23%, 22%)"
            state.backGroundColor=actions.payload? "hsl(0, 0%, 98%)":"hsl(207, 26%, 17%)"
            state.color=actions.payload? "hsl(0, 0%, 52%)" :"hsl(0, 0%, 52%)"
            state.img= actions.payload? sun:moon
            state.mode=actions.payload? "Light Mode":"Dark Mode"
        })
    }
})
export default themeSlice.reducer
export const {modes}=themeSlice.actions