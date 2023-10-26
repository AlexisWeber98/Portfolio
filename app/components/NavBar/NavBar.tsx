import styles from './NavBar.module.css'
import Link from "next/link";

export default function NavBar () {
  return (
    <nav className={styles.nav}>
      <div>
        <Link href="/ "> Home </Link>
      </div>
      <div>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};
