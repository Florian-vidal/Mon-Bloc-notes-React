// Composant utilisé pour afficher le champs d'ajout d'une tâche
import styles from "./TaskInput.module.css";
import { useState } from "react";

export const TaskInput = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleInputChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <>
      <div className={`box ${styles.element}`}>
        <h2 className={styles.title}>Ajoute ta prochaine tâche</h2>
        <form className={styles.container} onSubmit={handleAddTask}>
          <input
            onChange={handleInputChange}
            value={taskTitle}
            type="text"
            className={styles.input}
            placeholder="Créer une tâche"
          />
          <button className="button-primary" type="submit">
            Ajouter
          </button>
        </form>
      </div>
    </>
  );
};
