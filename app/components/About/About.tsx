import Image from "next/image";
import Ale from "../../assets/Ale.png";
import styles from "./About.module.css";
export default function About() {
  return (
    <main className={styles.container}>
      <div className={styles.photo}>
        <Image
          src={Ale}
          alt="Alexis Weber"
          width={300}
          height={300}
          style={{ borderRadius: "1em"}}
        />
      </div>
      <article className={styles.article}>
      <p className={styles.description}>Soy desarrollador full stack, con gran interés en aprender cosas nuevas, curiosidad y +</p>
      </article>
      


    </main>
  );
}
