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
    <div className="fixed inset-0 bg-red-300 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-10">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-red-100">
        <div className="text-center">
          <h3 className="text-2xl font-header text-primary">Modal Title</h3>
          <div className="mt-2 px-7 py-3 ">
            <form>
              <label>
                Break Time:
                <input
                  type="number"
                  value={localBreakTime}
                  onChange={(e) => setLocalBreakTime(Number(e.target.value))}
                />
              </label>
              <label>
                Focus Time:
                <input
                  type="number"
                  value={localFocusTime}
                  onChange={(e) => setLocalFocusTime(Number(e.target.value))}
                />
              </label>
              <label>
                Long Break Time:
                <input
                  type="number"
                  value={localLongBreakTime}
                  onChange={(e) =>
                    setLocalLongBreakTime(Number(e.target.value))
                  }
                />
              </label>
              <button onClick={handleClose}>Close</button>
            </form>
          </div>
          <div className="flex justify-center mt-4">
            {/* Using useRouter to dismiss modal*/}
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
