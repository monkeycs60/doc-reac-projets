import React, { useContext } from "react";
import { TaskContext } from "../../App.jsx";
import QueryFetch from "../../components/QueryFetch/QueryFetch.jsx";
import "./ContactPage.css";

const ContactPage = () => {
  const { tasks } = useContext(TaskContext);

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
        {tasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </div>
      <QueryFetch />
    </div>
  );
};

export default ContactPage;
