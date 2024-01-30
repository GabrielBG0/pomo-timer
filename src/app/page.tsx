"use client";
import { LuBadgePlus, LuSettings } from "react-icons/lu";
import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import FocusClock from "@/components/FocusClock";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [focusTime, setFocusTime] = useState(30 * 60); // 30 minutes in seconds
  const [breakTime, setBreakTime] = useState(5 * 60); // 5 minutes in seconds
  const [longBreakTime, setLongBreakTime] = useState(15 * 60); // 15 minutes in seconds
  const [updateTimer, setUpdateTimer] = useState(false);

  return (
    <main className="min-h-screen flex justify-center items-start bg-bg">
      {showModal && (
        <Modal
          setUpdateTimer={setUpdateTimer}
          setShowModal={setShowModal}
          focusTime={focusTime}
          breakTime={breakTime}
          longBreakTime={longBreakTime}
          setFocusTime={setFocusTime}
          setBreakTime={setBreakTime}
          setLongBreakTime={setLongBreakTime}
        />
      )}
      <div className="h-full w-2/5 flex flex-col justify-start items-center">
        <header className="header flex justify-between items-center w-full h-[100px]">
          <h1 className="align-middle font-header text-4xl tracking-wide text-primary">
            Pomodoro Timer
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="flex justify-center items-center text-bg rounded-md bg-primary p-2"
          >
            <LuSettings className="text-2xl" />
          </button>
        </header>
        <div className="flex flex-col justify-start items-center p-[20px] w-full">
          <FocusClock
            seconds={focusTime}
            updateTimer={updateTimer}
            setUpdateTimer={setUpdateTimer}
          />
          <div className="header flex justify-center items-center w-full h-20 font-body text-3xl text-primary">
            Focus Time!
          </div>
        </div>
      </div>
    </main>
  );
}
