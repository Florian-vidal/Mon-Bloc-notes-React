import styles from "./TaskItem.module.css";

// Ce composant est utilisé pour afficher une tâche
export const TaskItem = ({ task, editTask, deleteTask }) => {
  return (
    <>
      {/* Élément de liste représentant une tâche */}
      <li
        className={`${styles.container} ${
          // Applique un style différent selon l'état de complétion de la tâche
          task?.isCompleted ? styles.success : styles.default
        }`}
        // Au clic sur la tâche, bascule son état de complétion
        onClick={() => editTask(task.id, !task.isCompleted)}
      >
        {/* Conteneur pour le contenu principal de la tâche */}
        <div className={styles.item}>
          {/* Badge affichant l'ID de la tâche */}
          <div
            className={`${styles.id} ${
              // Style différent pour l'ID selon l'état de complétion
              task?.isCompleted ? styles.idSuccess : styles.idDefault
            }`}
          >
            {task.id}
          </div>
          {/* Titre de la tâche */}
          <div
            className={
              // Style différent pour le titre selon l'état de complétion
              // (barré si complétée)
              task?.isCompleted ? styles.contentSuccess : styles.contentDefault
            }
          >
            {task.title}
          </div>
        </div>
        {/* Bouton de suppression de la tâche */}
        <button
          className="button-primary"
          onClick={(event) => {
            // Empêche la propagation de l'événement au <li> parent
            // pour éviter de basculer l'état de complétion lors du clic sur le bouton
            event.stopPropagation();
            // Appelle la fonction deleteTask avec l'ID de la tâche
            deleteTask(task.id);
          }}
        >
          {/* Icône SVG de poubelle pour la suppression */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ width: "20px", height: "20px" }}
          >
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>
    </>
  );
};
