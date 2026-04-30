import Link from "next/link";
import TodoItem from "./_components/TodoItem";
import TodoFilter from "./_components/TodoFilter";

async function getTodos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`);
  if (!res.ok) {
    throw new Error("todo 목록을 가져오는 데 실패했습니다.");
  }

  return res.json();
}

export default async function Page({ searchParams }) {
  const todos = await getTodos();
  const sp = await searchParams;

  const completed = sp?.completed;

  const filtered = todos.filter((todo) => {
    if (completed === "true") return todo.completed === true;
    if (completed === "false") return todo.completed === false;
    return true;
  });

  return (
    <main className="flex flex-col p-8 gap-8">
      <h1 className="text-3xl font-bold mt-6">Todo List</h1>

      <div className="flex items-center justify-between">
        <TodoFilter />
        <Link
          href="/todos/new"
          className="inline-block py-3 px-6 border rounded-lg "
        >
          새로운 Todo 추가하기
        </Link>
      </div>

      <ul className="flex flex-col gap-6">
        {filtered.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </main>
  );
}
