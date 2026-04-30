async function getTodo(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${id}`);
  if (!res.ok) {
    throw new Error("개별 todo를 가져오는 데 실패했습니다.");
  }

  return res.json();
}

export default async function page({ params }) {
  const { id } = await params;

  const todo = await getTodo(id);

  return (
    <main className="flex flex-col p-8">
      <h1 className="text-3xl font-bold my-6 mb-8">{todo.title}</h1>
      <div className="flex flex-col gap-4">
        <p>설명: {todo.content}</p>
        <p>완료여부: {todo.completed ? "완료" : "미완료"}</p>
        <p>우선순위: {todo.priority}</p>
        <p>카테고리: {todo.category} </p>
        <p>생성일: {todo.createdAt} </p>
      </div>
    </main>
  );
}
