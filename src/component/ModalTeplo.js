import { ClassNames } from "@emotion/react"
import "./Modal.css"
const ModalTeplo = ({active, setActive, children}) =>{
    return(
        <div className={active ? "modalTeplo active" : "modalTeplo"} onClick={() => setActive(false)}>
            <div className={active ? "modal__contentTeplo active" : "modal__contentTeplo"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};
export default ModalTeplo;