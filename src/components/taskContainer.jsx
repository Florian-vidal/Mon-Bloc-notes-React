import { useState } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";

// Ce composant est utilisé pour afficher la totalité des fonctionnalités des tâches
export const TaskContanier = () => {
  const [taskList, setTaskList] = useState([]);

  console.log(taskList);

  const addTask = (title) => {
    const newTask = {
      id: taskList.length + 1,
      title: title,
      isCompleted: false,
    };
    setTaskList([...taskList, newTask]);
  };

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList />
      <Footer />
    </main>
  );
};
