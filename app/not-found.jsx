import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold my-6">Not Found</h1>
      <p className="mb-12 font-medium text-gray-700">
        존재하지 않는 페이지입니다.
      </p>
      <Link
        href="/"
        className="inline-block py-3 px-6 bg-black text-white rounded-lg "
      >
        Home으로 돌아가기
      </Link>
    </main>
  );
}
