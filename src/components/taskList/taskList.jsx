// Ce composant est utilisé pour afficher la liste des tâches
import { TaskItem } from "../taskItem/taskItem";
import styles from "./TaskList.module.css";

// Composant TaskList - Affiche la liste complète des tâches avec leurs états
export const TaskList = ({
  tasksList,
  editTask,
  deleteTask,
  incompletedTasks,
}) => {
  // Transforme chaque tâche de la liste en composant TaskItem
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

  // Si la liste contient des tâches, affiche la liste avec le message de statut
  if (taskList && taskList.length > 0) {
    return (
      <>
        <div className="box">
          {/* Titre affichant le nombre de tâches restantes ou un message de félicitations */}
          <h2 className={styles.title}>
            {/* Message si des tâches sont encore à accomplir */}
            {incompletedTasks > 0 && (
              <>
                Il te reste{" "}
                <span className="important">{incompletedTasks}</span> tâche
                {/* Ajoute un "s" au pluriel si plus d'une tâche reste */}
                {incompletedTasks > 1 && "s"} à accomplir !
              </>
            )}

            {/* Message de félicitations si toutes les tâches sont complétées */}
            {incompletedTasks === 0 && <>Tu as terminé toutes tes tâches !</>}
          </h2>

          {/* Liste des tâches */}
          {tasksList && tasksList.length > 0 && (
            <ul className={styles.container}>{taskList}</ul>
          )}
        </div>
      </>
    );
  } else {
    // État vide : affiche un message quand aucune tâche n'existe
    return (
      <div className="box">
        <h2 className={styles.emptyState}>
          Pour l'instant, aucune tâche de prévue !
        </h2>
      </div>
    );
  }
};
