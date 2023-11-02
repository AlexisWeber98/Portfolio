import styles from "./Proyects.module.css";
import Cards from "../Cards/Card";

const Proyects = () => {
  const craftBeer = {
    name: "CraftBeer",
    image:
      "https://craftbeer-team.netlify.app/assets/craftBeerIcon-dbc1f5c6.ico",
    url: "https://craftbeer-team.netlify.app/",
  };

  const worldOrfDogs = {
    name: "WorldOfDogs",
    image: "",
    url: "https://world-of-dogs.netlify.app/",
  };

  const webProyects = [craftBeer, worldOrfDogs];
  const movileProyects = [];

  const webMap = webProyects.map((proyect) => {
    return 
  });

  return (
    <main className={styles.container}>
      <h2 className={styles.center}>Proyectos</h2>
      <hr />

      <div className={styles.proyects}>
        <div className={styles.cards}>
          <h3 className="title">Web</h3>
          <hr />
        </div>
        <div className={styles.cards}>
          <h3 className="title">Movil</h3>
          <hr />
        </div>
      </div>
    </main>
  );
};

export default Proyects;
