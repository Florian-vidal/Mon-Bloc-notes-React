import styles from "./Footer.module.css";

// Ce composant est utilisé pour afficher le pied de page
export const Footer = ({ completedTasks }) => {
  return (
    <footer>
      {/* Section affichant le message de félicitations si des tâches sont complétées */}
      <div className={styles.footerMessage}>
        {/* Condition : n'affiche le message que si au moins une tâche est complétée */}
        {completedTasks > 0 && (
          <code className={styles.footer}>
            Avec Tasklist, tu as terminé {completedTasks} tâche
            {/* Ajoute un "s" au pluriel si plus d'une tâche est complétée */}
            {completedTasks > 1 ? "s" : null} !
          </code>
        )}
      </div>

      {/* Section affichant les informations de copyright et le lien vers mon portfolio */}
      <div className={styles.footerMessage}>
        <code>
          {/* Affiche l'année en cours dynamiquement */}©{" "}
          {new Date().getFullYear()} Florian Vidal | Mon Bloc-notes React |{" "}
          <a
            href="https://portfolio-florian-vidal.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-400"
          >
            Portfolio
          </a>
        </code>
      </div>
    </footer>
  );
};
