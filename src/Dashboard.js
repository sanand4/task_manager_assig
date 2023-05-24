// Dashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = ({ token }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/tasks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasks(response.data.tasks);
      } catch (error) {
        console.log("Failed to fetch tasks");
      }
    };

    fetchTasks();
  }, [token]);

  return (
    <div>
      <h2>Task Dashboard</h2>
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
};

export default Dashboard;
