type ErrorProp={
    errorMsg:string
}
export const Error=({errorMsg}:ErrorProp)=>{
    return(
        <h3 style={{color:"red", textAlign:"center"}}>{errorMsg}</h3>
    )
}