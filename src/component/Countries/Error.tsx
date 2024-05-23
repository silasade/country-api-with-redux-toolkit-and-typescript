type ErrorProp={
    errorMsg:string
}
export const Error=({errorMsg}:ErrorProp)=>{
    return(
        <h1 style={{color:"red", textAlign:"center"}}>{errorMsg}</h1>
    )
}