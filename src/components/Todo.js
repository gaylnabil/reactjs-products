import PropTypes from 'prop-types'
import { useState } from 'react';
/* ************************** */
import Modal from "./Modal";
import Backdrop from "./Backdrop";


const Todo = ({ title }) => {

    const [modalOpened, setModalOpened] = useState(false);

    const deleteHandler = () => {
        console.log(title);
        setModalOpened(true)
    }

     const closeModalHandler = () => {
        setModalOpened(false)
    }

    return (
      <div className="card">
        <h2>{title}</h2>
        <div className="actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </div>
        {modalOpened && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}{" "}
        {/* the same instruction {modalOpened ? <Modal /> : null} */}
        {modalOpened && <Backdrop onCancel={closeModalHandler} />}
      </div>
    );
}

Todo.defaultProps = {
    title: "Default Todo",
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
};

// Using CSS in JS
// const headerStyle = {
//     color: 'blue', 
//     backgroundColor: 'yellow'
// }

export default Todo