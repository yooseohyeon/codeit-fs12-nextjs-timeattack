"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function TodoFilter() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const search = searchParams.get("completed");

  const setFilter = (value) => {
    if (!value) {
      router.push("/todos");
    } else {
      router.push(`/todos?completed=${value}`);
    }
  };

  const baseStyle =
    "inline-block py-2 px-4 border border-gray-500 rounded-lg cursor-pointer";
  const activeStyle = "bg-black text-white";

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setFilter(null)}
        className={`${baseStyle} ${search === null && activeStyle}`}
      >
        전체
      </button>
      <button
        onClick={() => setFilter("true")}
        className={`${baseStyle} ${search === "true" && activeStyle}`}
      >
        완료
      </button>
      <button
        onClick={() => setFilter("false")}
        className={`${baseStyle} ${search === "false" && activeStyle}`}
      >
        미완료
      </button>
    </div>
  );
}
