"use client";
import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useCallback,
  useRef,
} from "react";

type ClockProps = {
  seconds: number;
  updateTimer: boolean;
  setUpdateTimer: Dispatch<SetStateAction<boolean>>;
};

import { LuRefreshCw } from "react-icons/lu";
export default function Clock({
  seconds,
  updateTimer,
  setUpdateTimer,
}: ClockProps) {
  const [started, setStarted] = useState(false);
  const [timer, setTimer] = useState(seconds);
  const [isRunning, setIsRunning] = useState(false);
  const [finished, setFinished] = useState(false);

  const audio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined"
      ? new Audio(
          "https://github.com/GabrielBG0/pomo-timer/raw/main/public/clack.mp3"
        )
      : undefined
  );

  function handleTimerButtonClick() {
    if (isRunning) {
      setIsRunning(false);
    } else if (finished) {
      resetTimer();
    } else {
      setIsRunning(true);
    }

    audio.current?.play();
  }

  const resetTimer = useCallback(() => {
    setTimer(seconds);
    setFinished(false);
    setUpdateTimer(false);
    setStarted(false);
  }, [seconds, setUpdateTimer]);

  function setButtonText() {
    if (isRunning) {
      return "Pause Timer";
    } else if (!isRunning && finished) {
      return "Reset Timer";
    } else {
      return "Start Timer";
    }
  }

  useEffect(() => {
    if (updateTimer) {
      resetTimer();
    }
    if (timer > 0 && isRunning) {
      if (!started) {
        setStarted(true);
      }
      const timerId = setTimeout(() => setTimer(timer - 1), 1000);
      return () => {
        clearTimeout(timerId);
      }; // cleanup on unmount or update
    }
    if (timer === 0 && isRunning) {
      setIsRunning(false);
      setFinished(true);
    }
  }, [updateTimer, seconds, timer, isRunning, resetTimer, finished, started]);

  const minutes = Math.floor(timer / 60);
  const remainingSeconds = timer % 60;
  return (
    <>
      <h1 className="items-center font-header text-5xl sm:text-7xl lg:text-9xl tracking-wide text-bg pb-8 sm:pb-14 py-4 sm:py-7">
        {`${minutes.toString().padStart(2, "0")}:${remainingSeconds
          .toString()
          .padStart(2, "0")}`}
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-evenly w-full gap-3 sm:gap-0">
        <button
          onClick={handleTimerButtonClick}
          className="flex justify-center items-center text-bg rounded-lg bg-primary py-2 px-6 sm:px-8 font-header text-lg sm:text-xl lg:text-2xl transform transition-transform duration-150 ease-in-out active:scale-95 w-full sm:w-auto"
        >
          {setButtonText()}
        </button>
        {!finished && started && (
          <button
            className="flex justify-center items-center text-bg rounded-lg bg-primary p-2 font-header text-lg sm:text-xl lg:text-2xl transform transition-transform duration-150 ease-in-out active:scale-95"
            onClick={() => resetTimer()}
          >
            <LuRefreshCw className="text-lg sm:text-xl lg:text-2xl" />
          </button>
        )}
      </div>
    </>
  );
}
