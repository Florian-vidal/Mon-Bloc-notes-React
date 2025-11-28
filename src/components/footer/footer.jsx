// Ce composant est utilisé pour afficher le pied de page
import styles from "./Footer.module.css";

export const Footer = ({ completedTasks }) => {
  return (
    <footer>
      <div className={styles.footerMessage}>
        {completedTasks > 0 && (
          <code className={styles.footer}>
            Avec Tasklist, tu as terminé {completedTasks} tâche
            {completedTasks > 1 ? "s" : null} !
          </code>
        )}
      </div>

      <div className={styles.footerMessage}>
        <code>
          © {new Date().getFullYear()} Florian Vidal | Mon Bloc-notes React |{" "}
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
