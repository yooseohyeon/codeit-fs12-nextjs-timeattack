import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full p-6 border-b">
      <Link href="/">
        <h1 className="text-xl font-semibold">Todo App</h1>
      </Link>
    </header>
  );
};

export default Header;
