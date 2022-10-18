import { ClassNames } from "@emotion/react"
import "./Modal.css"
const ModalKanal = ({active, setActive, children}) =>{
    return(
        <div className={active ? "modalKanal active" : "modalKanal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__contentKanal active" : "modal__contentKanal"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};
export default ModalKanal;