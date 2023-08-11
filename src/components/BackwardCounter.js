import React from "react";
import Card from "./Card";
import useCounter from "../hooks/use-counter";

export default function BackwardCounter() {
  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     const currentCount = setInterval(() => {
  //       setCount((prevCount) =>
  //         prevCount - 1);
  //     }, 1000);
  //     return () => clearInterval(currentCount);
  //   },[]);
  const count = useCounter(false);
  return <Card>{count}</Card>;
}
