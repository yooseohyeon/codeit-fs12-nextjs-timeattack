"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "1",
    priority: "low",
  });

  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.title.trim()) {
      newErrors.title = "제목을 입력해주세요";
    }

    if (!form.content.trim()) {
      newErrors.content = "설명을 입력해주세요";
    }

    return newErrors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        completed: false,
        createdAt: new Date().toISOString(),
      }),
    });

    router.push("/todos");
  };

  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold my-6 mb-8">Todo 추가</h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-8 w-full max-w-xl my-10"
      >
        <div className="flex flex-col">
          <label>제목</label>
          <input
            name="title"
            value={form.title}
            onChange={onChange}
            placeholder="할 일의 제목을 입력해주세요."
            className={`border rounded px-3 py-2 ${errors.title ? "border-red-500" : "border-gray-300"}`}
            required
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label>설명</label>
          <input
            name="content"
            value={form.content}
            onChange={onChange}
            placeholder="할 일의 설명을 입력해주세요."
            className={`border rounded px-3 py-2 ${errors.content ? "border-red-500" : "border-gray-300"}`}
            required
          />
          {errors.content && (
            <p className="text-sm text-red-500">{errors.content}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label>카테고리</label>
          <select
            name="category"
            value={form.category}
            onChange={onChange}
            className="border rounded px-3 py-2 border-gray-300"
          >
            <option value="1">업무</option>
            <option value="2">공부</option>
            <option value="3">개인</option>
            <option value="4">운동</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>우선순위</label>
          <select
            name="priority"
            value={form.priority}
            onChange={onChange}
            className="border rounded px-3 py-2 border-gray-300"
          >
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </div>

        <button
          type="submit"
          className="inline-block mt-8 py-2 px-4 border border-gray-500 rounded-lg cursor-pointer"
        >
          추가
        </button>
      </form>
    </main>
  );
}
