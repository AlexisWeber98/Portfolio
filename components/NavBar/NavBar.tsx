import Link from "next/link";

export default function NavBar () {
  return (
    <nav className="nav">
      <div>
        <Link href="/ "> Home </Link>
      </div>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};
