import React, { useState } from "react";
import "./Signature.css"

const Signature = () => {
  const [signature, setSignature] = useState("");

  return (
    <div className="signature-container">
      <input
        type="text"
        value={signature}
        onChange={(e) => setSignature(e.target.value)}
      />
      <div className={signature !== "" ? "signature-replicate" : null}>
      {signature}</div>
    </div>
  );
}

export default Signature;
