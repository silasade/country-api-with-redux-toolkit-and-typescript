import { useAppSelector } from "../../app/Hooks"
import close from "./close.png"
import "./Modal.css"
type ModalProps={
    name:string
    show:boolean
    handleShow:()=>void
}
export function Modal({name,show,handleShow}:ModalProps){
    function handle(){
        handleShow()
    }
    document.addEventListener("click",function(event){
        const target = event.target as Node;
        if(!document.querySelector(".modal")?.contains(target)){
            handle()
        }
    })
    const theme=useAppSelector(state=>state.theme)
    return(
        <div className="modal" style={{backgroundColor:theme.boxBackGroundColor,color:theme.boxColor, opacity:1}}>
            <div className="cancel">
            <img src={close}  className="close" alt="close" onClick={handleShow}/>
           
            </div>
            
            <div>
            <hr />
                <h4>"{name.charAt(0).toUpperCase() + name.slice(1)}" is not a Country.</h4>
            </div>
        </div>
    )
}