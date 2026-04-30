import Link from "next/link";
import TodoItem from "./_components/TodoItem";
import TodoFilter from "./_components/TodoFilter";

async function getTodos(completed) {
  const url =
    completed !== undefined
      ? `${process.env.NEXT_PUBLIC_API_URL}/todos?completed=${completed}`
      : `${process.env.NEXT_PUBLIC_API_URL}/todos`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("todo 목록을 가져오는 데 실패했습니다.");
  }

  return res.json();
}

export default async function Page({ searchParams }) {
  const sp = await searchParams;

  const todos = await getTodos(sp?.completed);

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
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </main>
  );
}
