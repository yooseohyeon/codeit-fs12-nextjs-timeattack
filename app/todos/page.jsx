import TodoItem from "./_components/TodoItem";

async function getTodos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`);
  if (!res.ok) {
    throw new error("todo 목록을 가져오는 데 실패했습니다.");
  }

  return res.json();
}

export default async function page() {
  const todos = await getTodos();

  return (
    <main className="flex flex-col p-8">
      <h1 className="text-3xl font-bold my-6 mb-8">Todo List</h1>

      <ul className="flex flex-col gap-6">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </main>
  );
}
