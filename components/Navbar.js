import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/">
        <a>Home Page</a>
      </Link>

      <Link href="/about">
        <a>About Page</a>
      </Link>

      <Link href="/contact">
        <a>Contact Page</a>
      </Link>
    </div>
  );
};

export default Navbar;
