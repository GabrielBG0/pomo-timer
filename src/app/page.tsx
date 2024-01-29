import Image from "next/image";
import { LuBadgePlus, LuSettings } from "react-icons/lu";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-start bg-bg">
      <div className="h-full w-1/3 flex flex-col justify-start items-center">
        <header className="header flex justify-between items-center w-full h-[100px]">
          <h1 className="align-middle font-header text-4xl tracking-wide text-primary">
            Pomodoro Timer
          </h1>
          <button className="flex justify-center items-center text-bg rounded-md bg-primary p-2">
            <LuSettings className="text-2xl" />
          </button>
        </header>
        <div className="flex flex-col justify-start items-center p-[20px] w-full">
          <div className="flex flex-col justify-center items-center m-[20px] bg-secondary rounded-lg p-6 w-full">
            <h1 className="align-middle font-header text-9xl tracking-wide text-bg pb-14 py-7">
              30:00
            </h1>
            <button className="flex justify-center items-center text-bg rounded-lg bg-primary py-2 px-8 font-header text-2xl timer-button">
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
