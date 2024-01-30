"use client";
import { LuBadgePlus, LuSettings } from "react-icons/lu";
import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import Link from "next/link";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: SearchParamProps) {
  const [seconds, setSeconds] = useState(30 * 60); // 30 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const show = searchParams?.show;

  useEffect(() => {
    if (seconds > 0 && isRunning) {
      const timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timerId); // cleanup on unmount or update
    }
  }, [seconds, isRunning]);

  const startTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      return;
    }
    setIsRunning(true);
  };

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <main className="min-h-screen flex justify-center items-start bg-bg">
      {show && <Modal />}
      <div className="h-full w-2/5 flex flex-col justify-start items-center">
        <header className="header flex justify-between items-center w-full h-[100px]">
          <h1 className="align-middle font-header text-4xl tracking-wide text-primary">
            Pomodoro Timer
          </h1>
          <Link
            href="/?show=true"
            className="flex justify-center items-center text-bg rounded-md bg-primary p-2"
          >
            <LuSettings className="text-2xl" />
          </Link>
        </header>
        <div className="flex flex-col justify-start items-center p-[20px] w-full">
          <div className="flex flex-col justify-center items-center m-[20px] bg-secondary rounded-lg p-6 w-full">
            <h1 className="align-middle font-header text-9xl tracking-wide text-bg pb-14 py-7">
              {`${minutes.toString().padStart(2, "0")}:${remainingSeconds
                .toString()
                .padStart(2, "0")}`}
            </h1>
            <button
              onClick={startTimer}
              className="flex justify-center items-center text-bg rounded-lg bg-primary py-2 px-8 font-header text-2xl transform transition-transform duration-150 ease-in-out active:scale-95"
            >
              Start Timer
            </button>
          </div>
          <div className="header flex justify-center items-center w-full h-20 font-body text-3xl text-primary">
            Focus Time!
          </div>
        </div>
      </div>
    </main>
  );
}
