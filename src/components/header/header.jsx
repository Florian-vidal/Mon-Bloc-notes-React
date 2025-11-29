import styles from "./Header.module.css";
import reactLogo from "../../assets/logo.webp";

// Ce composant est utilisé pour afficher l'en-tête de l'application
export const Header = () => {
  return (
    <>
      <div className={styles.container}>
        {/* Conteneur pour le logo et le titre */}
        <div className={styles.titleContainer}>
          {/* Logo de l'application */}
          <img src={reactLogo} alt="logo" width={50} height={50} />
          {/* Section contenant le titre et la description */}
          <div>
            <h1>Mon Bloc-notes React</h1>
            <div className="color-gray">
              <code>Petit projet React d'une To Do List dynamique !</code>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
