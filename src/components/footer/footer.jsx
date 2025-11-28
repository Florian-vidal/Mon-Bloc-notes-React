// Ce composant est utilisé pour afficher le pied de page
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <code className={styles.footer}>
        Avec Tasklist, tu as éliminé X tâche"s"
      </code>
    </footer>
  );
};
