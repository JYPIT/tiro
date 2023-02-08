import TimerToolsNav from "../components/TimeToolsNav";
import Stopwatch from "../components/Stopwatch";
import { useState } from "react";
import Timer from "../components/Timer";

export default function TimeTools() {
  const [isTimer, setIsTimer] = useState(false);

  return (
    <>
      <TimerToolsNav setIsTimer={setIsTimer} />
      {isTimer ? <Timer /> : <Stopwatch />}
    </>
  );
}
