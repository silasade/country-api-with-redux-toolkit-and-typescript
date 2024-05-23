import { useAppDispatch,useAppSelector } from "../app/Hooks"
const Body=()=>{
    const theme=useAppSelector(state=>state.theme)
    document.body.style.backgroundColor=theme.backGroundColor

    return(
        <></>
    )
}
export default Body