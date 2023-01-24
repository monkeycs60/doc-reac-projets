import { useSelector, useDispatch } from "react-redux";
import { updateSignature } from "../../redux.jsx";
import "./Signature.css";

const Signature = () => {
  const { signature } = useSelector((state) => state.signature);
  console.log(signature);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateSignature(e.target.value));
  };

  return (
    <div className="signature-container">
      <input type="text" value={signature} onChange={handleChange} />
      <button type="button">Envoyer la signature</button>
      <div className={signature !== "" ? "signature-replicate" : null}>
        {signature}
      </div>
    </div>
  );
};

export default Signature;
