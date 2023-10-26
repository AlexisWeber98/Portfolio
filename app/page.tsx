import Image from "next/image";
import styles from "./page.module.css";
import Proyects from "@/app/components/Proyects/Proyects";
import About from "@/app/components/About/About";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Alexis Weber</h1>
      <h2>Im Full Stack, Im developer</h2>
      <div>
        <About />
      </div>
      <div>
        <Proyects />
      </div>
    </main>
  );
}
