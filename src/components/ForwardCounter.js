import React from "react";
import Card from "./Card";
import useCounter from '../hooks/use-counter.js'
export default function ForwardCounter() {
//     const [count, setCount] = useState(0);

//   useEffect(() => {
//     const currentCount = setInterval(() => {
//       setCount((prevCount) =>
//         prevCount + 1);
//     }, 1000);
//     return () => clearInterval(currentCount);
//   },[]);

const count=useCounter()
  return (
    <Card>{count}</Card>
  )
}
