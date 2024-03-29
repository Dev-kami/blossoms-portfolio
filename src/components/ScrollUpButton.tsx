"use client";

import { useRouter } from "next/navigation";
import { BsArrowUp } from "react-icons/bs";

const ScrollUpButton = () => {
  const router = useRouter();
  return (
    <button
      className="bg-stone-500 text-white p-2 rounded-sm absolute bottom-5 right-5"
      onClick={() => router.push("#home")}
    >
      <BsArrowUp />
    </button>
  );
};

export default ScrollUpButton;
