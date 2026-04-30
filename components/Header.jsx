import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center gap-10 w-full p-6 px-14 border-b bg-white">
      <Link href="/">
        <h1 className="text-xl font-semibold">Todo App</h1>
      </Link>

      <div className="flex gap-6">
        <Link href="/todos">Todo 목록</Link>
        <Link href="/todos/new">Todo 추가</Link>
      </div>
    </header>
  );
};

export default Header;
