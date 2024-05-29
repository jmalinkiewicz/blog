"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const router = useRouter();

  async function authenticate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        setMessage("Logged in successfully");
        setIsError(false);
        router.push("/dashboard");
      } else {
        setMessage("Invalid username or password");
        setIsError(true);
        setIsLoading(false);
      }
    } catch (error) {
      setMessage("Service temporarily unavailable");
      setIsLoading(false);
      setIsError(true);
      console.error(error);
    }
  }

  return (
    <div className="p-5 w-full bg-[#FDF3DB] dark:bg-shark-900 border-2 rounded-md">
      <h1 className="text-2xl font-bold">Log In</h1>
      <form onSubmit={authenticate} className="flex flex-col gap-4 mt-4">
        <label className="flex flex-col gap-3">
          <span>username</span>
          <input
            className="p-2 rounded"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col gap-3">
          <span>password</span>
          <input
            className="p-2 rounded"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button
          className="bg-blue-400 p-2 text-white rounded"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Logging In..." : "Log In"}
        </button>
        {message && (
          <p
            className={`p-2 border-2 ${
              isError
                ? "bg-red-200 border-red-500"
                : "bg-green-200 border-green-500"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
