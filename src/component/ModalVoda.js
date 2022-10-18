import { ClassNames } from "@emotion/react"
import "./Modal.css"
const ModalVoda = ({active, setActive, children}) =>{
    return(
        <div className={active ? "modalVoda active" : "modalVoda"} onClick={() => setActive(false)}>
            <div className={active ? "modal__contentVoda active" : "modal__contentVoda"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};
export default ModalVoda;