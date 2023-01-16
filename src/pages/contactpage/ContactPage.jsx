import React from "react";
import QueryFetch from "../../components/QueryFetch/QueryFetch.jsx";
import Signature from "../../components/Signature/Signature.jsx";
import "./ContactPage.css";

const ContactPage = () => {
  const tasks = JSON.parse(localStorage.getItem("memoire")) || [];

  return (
    <div>
      <h1>Contact Claude Dark</h1>
      <p>
        If you would like to get in touch with Claude Dark, you can reach him at
        the following:
      </p>
      <ul>
        <li>Email: claudedark@example.com</li>
        <li>Phone: 555-555-5555</li>
        <li>LinkedIn: https://www.linkedin.com/in/claudedark/</li>
      </ul>
      <div>
        {tasks.length === 0 ? (
          <p>"No tasks added in the todo list for the moment"</p>
        ) : (
          tasks.map((task) => <li key={task.id}>{task.task}</li>)
        )}
      </div>
      <QueryFetch />
      <Signature />
    </div>
  );
};

export default ContactPage;
