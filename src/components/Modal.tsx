"use client";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";

type ModalProps = {
  focusTime: number;
  breakTime: number;
  longBreakTime: number;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setFocusTime: Dispatch<SetStateAction<number>>;
  setBreakTime: Dispatch<SetStateAction<number>>;
  setLongBreakTime: Dispatch<SetStateAction<number>>;
  setUpdateTimer: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({
  focusTime,
  breakTime,
  longBreakTime,
  setBreakTime,
  setFocusTime,
  setLongBreakTime,
  setShowModal,
  setUpdateTimer,
}: ModalProps) {
  const router = useRouter();

  const [localBreakTime, setLocalBreakTime] = useState(breakTime / 60);
  const [localFocusTime, setLocalFocusTime] = useState(focusTime / 60);
  const [localLongBreakTime, setLocalLongBreakTime] = useState(
    longBreakTime / 60
  );

  const handleClose = () => {
    setBreakTime(localBreakTime * 60);
    setFocusTime(localFocusTime * 60);
    setLongBreakTime(localLongBreakTime * 60);
    setUpdateTimer(true);
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-red-300 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-10 p-4">
      <div className="p-4 sm:p-8 border shadow-lg rounded-md bg-red-100 w-full max-w-md mx-4">
        <div className="text-center h-full flex flex-col justify-between items-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-header text-primary mb-4">Configs</h2>
          <div className="flex justify-center items-center w-full">
            <form className="flex flex-col justify-start content-evenly items-center h-full w-full">
              <label className="flex flex-col justify-center items-center font-header text-primary py-3 sm:py-6 text-xl sm:text-2xl lg:text-3xl w-full">
                Focus Time:
                <input
                  type="number"
                  value={localFocusTime.toString()}
                  onChange={(e) => setLocalFocusTime(Number(e.target.value))}
                  className="w-full sm:w-[70%] mt-2 h-10 rounded-md font-body text-base sm:text-lg p-4 appearance-none"
                  min={0}
                />
              </label>
              <label className="flex flex-col justify-center items-center w-full font-header text-primary py-3 sm:py-6 text-xl sm:text-2xl lg:text-3xl">
                Break Time:
                <input
                  type="number"
                  value={localBreakTime.toString()}
                  onChange={(e) => setLocalBreakTime(Number(e.target.value))}
                  className="w-full sm:w-[70%] mt-2 h-10 rounded-md font-body text-base sm:text-lg p-4 appearance-none"
                  min={0}
                />
              </label>
              <label className="flex flex-col justify-center items-center w-full font-header text-primary py-3 sm:py-6 text-xl sm:text-2xl lg:text-3xl">
                Long Break Time:
                <input
                  type="number"
                  value={localLongBreakTime.toString()}
                  onChange={(e) =>
                    setLocalLongBreakTime(Number(e.target.value))
                  }
                  className="w-full sm:w-[70%] mt-2 h-10 rounded-md font-body text-base sm:text-lg p-4 appearance-none"
                  min={0}
                />
              </label>
            </form>
          </div>
          <div className="flex justify-center mt-4 w-full">
            <button
              onClick={handleClose}
              className="flex justify-center items-center text-bg rounded-lg bg-primary py-2 px-4 font-header text-lg sm:text-xl lg:text-2xl transform transition-transform duration-150 ease-in-out active:scale-95 w-full sm:w-auto"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
