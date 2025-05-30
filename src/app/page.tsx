"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6 font-bold">Travel Blog</h1>
      <div className="space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => router.push("/Login")}
        >
          Login
        </button>
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded"
          onClick={() => router.push("/Signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
