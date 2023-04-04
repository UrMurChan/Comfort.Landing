import "./Modal.css"
const ModalExample4 = ({active, setActive, children}) =>{
    return(
        <div className={active ? "modalExample active" : "modalExample"} onClick={() => setActive(false)}>
            <div className={active ? "modal__contentExample active" : "modal__contentExample"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};
export default ModalExample4;