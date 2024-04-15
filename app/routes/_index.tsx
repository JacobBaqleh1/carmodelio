import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const answerResponse = await fetch(
    "https://api.api-ninjas.com/v1/cars?limit=1&model=forester",
    {
      headers: {
        "X-Api-Key": "4QlYBX68ItIAu2TSjGJ3sg==mCIXwTEgJR8SPSaf",
      },
    }
  );

  const answerRes = await answerResponse.json();

  return { answerRes };
}

export default function Index() {
  const { answerRes } = useLoaderData<typeof loader>();
  console.log(answerRes);
  if (!Array.isArray(answerRes) || answerRes.length === 0) {
    return <div>No car data available</div>;
  }
  const firstCar = answerRes[0];
  return (
    <div>
      {" "}
      <h1>{TimerComponent()} timer for 7 seconds repeating.</h1>
      <h2>answer of the day:{firstCar.model}</h2>
    </div>
  );
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
