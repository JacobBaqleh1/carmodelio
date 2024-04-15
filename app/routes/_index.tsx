import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  //  setInterval(

  //   ,1000)
  return <div> {TimerComponent()} timer for 7 seconds repeating.</div>;
}

const TimerComponent = () => {
  const [num, setNum] = useState(7);

  useEffect(() => {
    const intervalidId = setInterval(() => {
      setNum((currentNum) => {
        if (currentNum === 0) {
          return 7;
        } else {
          return currentNum - 1;
        }
      });
    }, 1000);
    return () => clearInterval(intervalidId);
  }, []);
  return (
    <div>
      <h2>Timer: {num}</h2>
    </div>
  );
};
