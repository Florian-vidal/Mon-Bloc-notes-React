import { useState, useEffect } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";

// Composant principal TaskContainer - Gère l'état global et orchestre tous les composants
export const TaskContanier = () => {
  // État global contenant la liste de toutes les tâches
  const [tasksList, setTasksList] = useState([]);

  // Hook sui charge les tâches sauvegardées depuis localStorage au montage du composant
  useEffect(() => {
    // Récupère les tâches stockées dans le localStorage sous la clé "tasksList"
    const storedTasks = localStorage.getItem("tasksList");

    // Si des tâches existent dans le localStorage, on met à jour l'état tasksList
    if (storedTasks) {
      // JSON.parse convertit la string en tableau d'objets JavaScript
      setTasksList(JSON.parse(storedTasks));
    }
    // Le tableau de dépendances vide signifie que cet effet s'exécute uniquement au montage du composant
  }, []);

  // Sauvegarde la liste des tâches dans le localStorage
  const savedTasksToLocalStorage = (task) => {
    // JSON.stringify convertit le tableau d'objets en string
    // localStorage.setItem enregistre les données sous la clé "tasksList"
    localStorage.setItem("tasksList", JSON.stringify(task));
  };

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
    const updatedTasks = [...tasksList, newTask];
    setTasksList(updatedTasks);
    savedTasksToLocalStorage(updatedTasks);
  };

  // Modifie l'état de complétion d'une tâche existante
  const editTask = (id, completedValue) => {
    // Met à jour la liste en modifiant uniquement la tâche correspondante
    const updatedTasks = tasksList.map((task) => {
      // Si l'ID correspond, met à jour la propriété isCompleted, sinon retourne la tâche inchangée
      return task.id === id ? { ...task, isCompleted: completedValue } : task;
    });

    // Met à jour l'état tasksList avec la liste modifiée
    setTasksList(updatedTasks);
    // Sauvegarde la liste mise à jour dans le localStorage pour persister les modifications
    savedTasksToLocalStorage(updatedTasks);
  };

  // Supprime une tâche de la liste
  const deleteTask = (id) => {
    // Filtre la liste pour exclure la tâche avec l'ID correspondant
    const updatedTasks = tasksList.filter((task) => task.id !== id);

    // Met à jour l'état tasksList avec la liste filtrée (sans la tâche supprimée)
    setTasksList(updatedTasks);
    // Sauvegarde la liste mise à jour dans le localStorage pour persister la suppression
    savedTasksToLocalStorage(updatedTasks);
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
