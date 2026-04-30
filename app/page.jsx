import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold my-6">Home</h1>
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Xqgo96oN5pNB0wkwxg0i9pz4yJp9EgszKWeZN-9B9A&s"
        width={400}
        height={400}
        alt=""
      />
      {/* 중요한 정보를 담지 않고 있는 이미지라서 alt="" 처리*/}
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
