// Ce composant est utilisé pour afficher la liste des tâches
import { TaskItem } from "../taskItem/taskItem";
import styles from "./TaskList.module.css";

export const TaskList = ({
  tasksList,
  editTask,
  deleteTask,
  incompletedTasks,
}) => {
  const taskList = tasksList.map((task) => {
    return (
      <TaskItem
        key={task.id}
        task={task}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    );
  });

  if (taskList && taskList.length > 0) {
    return (
      <>
        <div className="box">
          <h2 className={styles.title}>
            {incompletedTasks > 0 && (
              <>
                Il te reste{" "}
                <span className="important">{incompletedTasks}</span> tâche
                {incompletedTasks > 1 && "s"} à accomplir !
              </>
            )}

            {incompletedTasks === 0 && <>Tu as terminé toutes tes tâches !</>}
          </h2>

          {tasksList && tasksList.length > 0 && (
            <ul className={styles.container}>{taskList}</ul>
          )}
        </div>
      </>
    );
  } else {
    return (
      <div className="box">
        <h2 className={styles.emptyState}>
          Pour l'instant, aucune tâche de prévue !
        </h2>
      </div>
    );
  }
};
