import { useState } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";

// Composant principal TaskContainer - Gère l'état global et orchestre tous les composants
export const TaskContanier = () => {
  // État global contenant la liste de toutes les tâches
  const [tasksList, setTasksList] = useState([]);

  // Ajoute une nouvelle tâche à la liste
  const addTask = (title) => {
    // Crée un nouvel objet tâche avec un ID unique
    const newTask = {
      // Génère un ID incrémental basé sur le dernier ID de la liste, ou 1 si la liste est vide
      id: tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1,
      title: title,
      isCompleted: false, // Par défaut, une nouvelle tâche n'est pas complétée
    };
    // Ajoute la nouvelle tâche à la liste existante
    setTasksList([...tasksList, newTask]);
  };

  // Modifie l'état de complétion d'une tâche existante
  const editTask = (id, completedValue) => {
    // Met à jour la liste en modifiant uniquement la tâche correspondante
    setTasksList(
      tasksList.map((task) => {
        // Si l'ID correspond, met à jour la propriété isCompleted, sinon retourne la tâche inchangée
        return task.id === id ? { ...task, isCompleted: completedValue } : task;
      })
    );
  };

  // Supprime une tâche de la liste
  const deleteTask = (id) => {
    // Filtre la liste pour exclure la tâche avec l'ID correspondant
    setTasksList(tasksList.filter((task) => task.id !== id));
  };

  // Calcule et retourne le nombre de tâches complétées et non complétées
  const getTaskCounts = () => {
    // Compte le nombre de tâches complétées
    const completedTasks = tasksList.filter((task) => task.isCompleted).length;
    // Calcule le nombre de tâches non complétées
    const incompletedTasks = tasksList.length - completedTasks;
    return {
      completedTasks,
      incompletedTasks,
    };
  };

  // Récupère les compteurs de tâches pour les passer aux composants enfants
  const { completedTasks, incompletedTasks } = getTaskCounts();

  return (
    <main>
      {/* Composant d'en-tête de l'application */}
      <Header />
      {/* Composant permettant d'ajouter une nouvelle tâche */}
      <TaskInput addTask={addTask} />
      {/* Composant affichant la liste des tâches */}
      <TaskList
        tasksList={tasksList}
        editTask={editTask}
        deleteTask={deleteTask}
        incompletedTasks={incompletedTasks}
      />
      {/* Composant de pied de page affichant les statistiques */}
      <Footer completedTasks={completedTasks} />
    </main>
  );
};
