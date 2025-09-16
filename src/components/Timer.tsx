import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";

import { LuRefreshCw } from "react-icons/lu";
import Clock from "./Clock";

type TimerProps = {
  focusTime: number;
  breakTime: number;
  longBreakTime: number;
  updateTimer: boolean;
  setUpdateTimer: Dispatch<SetStateAction<boolean>>;
};

enum TimerType {
  FOCUS,
  BREAK,
  LONG_BREAK,
}

export default function Timer({
  focusTime,
  breakTime,
  longBreakTime,
  updateTimer,
  setUpdateTimer,
}: TimerProps) {
  const [focusTimerSelected, setFocusTimerSelected] = useState(true);
  const [breakTimerSelected, setBreakTimerSelected] = useState(false);
  const [longBreakTimerSelected, setLongBreakTimerSelected] = useState(false);

  function updateSelected(selected: TimerType) {
    switch (selected) {
      case TimerType.FOCUS:
        setFocusTimerSelected(true);
        setBreakTimerSelected(false);
        setLongBreakTimerSelected(false);
        break;
      case TimerType.BREAK:
        setFocusTimerSelected(false);
        setBreakTimerSelected(true);
        setLongBreakTimerSelected(false);
        break;
      case TimerType.LONG_BREAK:
        setFocusTimerSelected(false);
        setBreakTimerSelected(false);
        setLongBreakTimerSelected(true);
        break;
    }
  }

  return (
    <div className="flex flex-col justify-center items-center m-[20px] bg-secondary rounded-lg px-3 sm:px-6 py-8 sm:py-12 w-full">
      <div className="flex flex-col sm:flex-row justify-evenly items-center w-full text-bg gap-2 sm:gap-4">
        <button
          className={`${
            focusTimerSelected === true ? "border-solid" : "border-dashed"
          } border-[2px] border-bg text-sm sm:text-lg lg:text-2xl px-3 sm:px-4 py-2 rounded-md w-full sm:w-auto`}
          onClick={() => updateSelected(TimerType.FOCUS)}
        >
          Focus Time
        </button>
        <button
          className={`${
            breakTimerSelected === true ? "border-solid" : "border-dashed"
          } border-[2px] border-bg text-sm sm:text-lg lg:text-2xl px-3 sm:px-4 py-2 rounded-md w-full sm:w-auto`}
          onClick={() => updateSelected(TimerType.BREAK)}
        >
          Break Time
        </button>
        <button
          className={`${
            longBreakTimerSelected === true ? "border-solid" : "border-dashed"
          } border-[2px] border-bg text-sm sm:text-lg lg:text-2xl px-3 sm:px-4 py-2 rounded-md w-full sm:w-auto`}
          onClick={() => updateSelected(TimerType.LONG_BREAK)}
        >
          Long Break Time
        </button>
      </div>
      {focusTimerSelected && (
        <Clock
          seconds={focusTime}
          updateTimer={updateTimer}
          setUpdateTimer={setUpdateTimer}
        />
      )}
      {breakTimerSelected && (
        <Clock
          seconds={breakTime}
          updateTimer={updateTimer}
          setUpdateTimer={setUpdateTimer}
        />
      )}
      {longBreakTimerSelected && (
        <Clock
          seconds={longBreakTime}
          updateTimer={updateTimer}
          setUpdateTimer={setUpdateTimer}
        />
      )}
    </div>
  );
}
