import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold my-6">Home</h1>
      <p className="mb-12 font-medium text-gray-700">
        할 일을 관리해 생산성을 높이는 Todo App
      </p>
      <Link
        href="/todos"
        className="inline-block py-3 px-6 bg-black text-white rounded-lg "
      >
        Todo 목록 보기
      </Link>
    </main>
  );
}
