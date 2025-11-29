// Composant racine de l'application React
import { TaskContanier } from "./components/taskContainer";

  // Composant App - Point d'entrée principal de l'application

function App() {
  return (
    <>
      {/* Composant principal qui gère toute la logique des tâches */}
      <TaskContanier />
    </>
  );
}

export default App;
