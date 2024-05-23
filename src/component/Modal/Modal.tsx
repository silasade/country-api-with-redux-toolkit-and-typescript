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
        <div className="modal" style={{backgroundColor:theme.boxBackGroundColor}}>
            <div>
            <img src={close}  className="close" alt="close" onClick={handleShow}/>
            </div>
            
            <div>
                <h2>{name} is not a Country</h2>
            </div>
        </div>
    )
}