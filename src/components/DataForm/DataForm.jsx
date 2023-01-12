import React, { useState, useEffect } from "react";
import "./DataForm.css"

const DataForm = () => {
  const [formData, setFormData] = useState(null);

  // componentDidMount lifecycle method equivalent
  useEffect(() => {
    // get the form data from LocalStorage
    const formDataString = localStorage.getItem("formData");
    // parse the form data string back to an object
    const formData = JSON.parse(formDataString);
    // update the form data state
    setFormData(formData);
  }, []);

  if (!formData) {
    return <div>No data found in LocalStorage</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(formData).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataForm;
