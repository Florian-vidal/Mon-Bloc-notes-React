// Ce commposant est utilisé pour afficher l'en-tête de l'application
import styles from "./Header.module.css";
import reactLogo from "../../assets/logo.webp";

export const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <img src={reactLogo} alt="logo" width={50} height={50} />
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
