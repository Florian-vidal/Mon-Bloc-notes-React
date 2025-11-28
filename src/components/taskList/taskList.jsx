// Ce composant est utilisé pour afficher la liste des tâches
import { TaskItem } from "../taskItem/taskItem";
import styles from "./TaskList.module.css";

export const TaskList = () => {
  return (
    <>
      <div className="box">
        <h2 className={styles.title}>Il te reste x tâches à accomplir !</h2>
        <ul className={styles.container}><TaskItem /></ul>
      </div>
    </>
  );
};
