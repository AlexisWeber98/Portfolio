import styles from "./Proyects.module.css";
import MovileProyects from "../MovileProyects/MovileProyects";
import WebProyects from "../WebProyects/WebProyects";

const Proyects = () => {
  
  return (
    <main className={styles.container}>
      <h2 className="title">Proyects</h2>

      <div className={styles.proyects}>
        <div className={styles.web}>
          <h3 className="title">Web</h3>
          <WebProyects/>
        </div>
        <div className={styles.movile}>
          <h3 className="title">Movile</h3>
          <MovileProyects />
        </div>
      </div>
    </main>
  );
};

export default Proyects;
