import Image from "next/image";
import styles from "./page.module.css";
import Proyects from "@/app/components/Proyects/Proyects";
import About from "@/app/components/About/About";
import Tecnologies from "./components/Tecnologies/Tecnologies";

export default function Home() {
 

  return (
    <main className={styles.main}>
      <h1>Alexis Weber</h1>
      <h2>Soy Full Stack, Soy developer</h2>
      <div>
        <About />
      </div>
      <hr />
      <div>
        <Proyects />
      </div>

      <aside>
        <Tecnologies/>
      </aside>
    </main>
  );
}
