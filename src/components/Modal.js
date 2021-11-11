

const Modal = ({onCancel, onConfirm}) => {

    // const cancelHandler = ()=>{
    //     console.log("onCancel: ", onCancel);
    //     onCancel();
    // }
    
    // const confirmHandler = () => {
    //     onConfirm();
    // };


    return (
      <div className="modal">
        <p>Are you sure you want to delete this Todo</p>
        <button className="btn btn--alt" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn" onClick={onConfirm}>
          Confirm
        </button>
      </div>
    );

}

export default Modal;