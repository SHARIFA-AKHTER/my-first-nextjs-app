"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
console.log(count);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-2xl p-6 text-center w-full max-w-sm">
        <h1 className="text-2xl text-gray-600 font-bold mb-4">
          Simple Counter
        </h1>
        <p className="text-4xl font-semibold text-indigo-600 mb-6">{count}</p>
      </div>

      {/* Buttons section */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full max-w-sm">
        <button
          onClick={() => setCount(count - 1)}
          className="flex-1 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
        >
          - Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          className="flex-1 px-4 py-2 bg-gray-400 text-white rounded-xl hover:bg-gray-600 transition"
        >
          Reset
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="flex-1 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
        >
          + Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
