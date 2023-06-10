import Popup from "reactjs-popup";

import "./OptionModal.css"


const OptionModal=({handler,modalTitle,trigger})=>{
    
    return(
        <Popup trigger={<span>{trigger}</span>}
                    modal
                    closeOnDocumentClick
                    nested
                    
                >
                    {close=>(
                        <div className="modal">
                            <span className="close" onClick={close}>
                                &times;
                            </span>
                            <div>
                                <span className="modal-title">{modalTitle}</span>
                                <div className="answer">
                                    <span onClick={handler} className="btn">YES</span>
                                    <span onClick={close} className="btn">NO</span>
                                </div>
                                

                            </div>
                        </div>
                    )}

                </Popup>
    )
}
export default OptionModal;