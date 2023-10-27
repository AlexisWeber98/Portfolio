import Image from "next/image";
import Ale from "../../assets/Ale.png";
import styles from "./About.module.css";
export default function About() {
  return (
    <main>
      <div className={styles.photo}>
        <Image
          src={Ale}
          alt="Alexis Weber"
          width={300}
          height={300}
          style={{ borderRadius: "10px" }}
        />
      </div>
      <h2>About me</h2>
    </main>
  );
}
