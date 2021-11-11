

const Backdrop = ({ onCancel }) => {
  console.log("Backdrop: ", onCancel);
  return <div className="backdrop" onClick={onCancel} />;
};

export default Backdrop;