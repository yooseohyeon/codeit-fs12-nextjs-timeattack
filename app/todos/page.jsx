async function getTodos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`);
  if (!res.ok) {
    throw new error("todo 목록을 가져오는 데 실패했습니다.");
  }

  return res.json();
}

/*
    {
      "id": "12",
      "title": "스트레칭 루틴 만들기",
      "content": "잠들기 전 10분 스트레칭 루틴을 정리해본다.",
      "category": "4",
      "completed": false,
      "priority": "high",
      "createdAt": "2026-04-27T23:00:00.000Z"
    }
      */
export default async function page() {
  const todos = await getTodos();

  return (
    <main className="flex flex-col p-8">
      <h1 className="text-3xl font-bold my-6 mb-8">Todo List</h1>

      <ul className="flex flex-col gap-6">
        {todos.map((todo) => (
          <li key={todo.id} className="py-4 border-b border-gray-300">
            <h2 className="text-lg font-semibold mb-4">{todo.title}</h2>
            <div className="text-gray-800">
              <p>설명: {todo.content}</p>
              <p>완료여부: {todo.completed ? "완료" : "미완료"}</p>
              <p>우선순위: {todo.priority}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
