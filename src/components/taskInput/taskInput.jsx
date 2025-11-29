import styles from "./TaskInput.module.css";
import { useState } from "react";

// Composant utilisé pour afficher le champ d'ajout d'une tâche
export const TaskInput = ({ addTask }) => {
  // État local pour stocker le titre de la tâche en cours de saisie
  const [taskTitle, setTaskTitle] = useState("");

  // Gère les changements dans le champ de saisie
  // Met à jour l'état local avec la valeur saisie
  const handleInputChange = (event) => {
    setTaskTitle(event.target.value);
  };

  // Gère la soumission du formulaire pour ajouter une nouvelle tâche
  const handleAddTask = (event) => {
    // Empêche le rechargement de la page
    event.preventDefault();
    // Vérifie que le titre n'est pas vide (après suppression des espaces)
    if (taskTitle.trim()) {
      // Appelle la fonction addTask passée en props avec le titre
      addTask(taskTitle);
      // Réinitialise le champ de saisie après l'ajout
      setTaskTitle("");
    }
  };

  return (
    <>
      {/* Conteneur principal du formulaire d'ajout */}
      <div className={`box ${styles.element}`}>
        <h2 className={styles.title}>Ajoute ta prochaine tâche</h2>
        {/* Formulaire pour saisir et soumettre une nouvelle tâche */}
        <form className={styles.container} onSubmit={handleAddTask}>
          {/* Champ de saisie pour le titre de la tâche */}
          <input
            onChange={handleInputChange}
            value={taskTitle}
            type="text"
            className={styles.input}
            placeholder="Créer une tâche"
          />
          {/* Bouton pour soumettre le formulaire et ajouter la tâche */}
          <button className="button-primary" type="submit">
            Ajouter
          </button>
        </form>
      </div>
    </>
  );
};
