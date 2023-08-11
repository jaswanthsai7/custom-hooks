 import React,{useState,useEffect} from "react";

const useCounter=(forwards=true)=>{
    const [count, setCount] = useState(0);

    useEffect(() => {
      const currentCount = setInterval(() => {
        if(forwards){
            setCount((prevCount) =>
          prevCount + 1);
        }else{
            setCount((prevCount) =>
          prevCount - 1);
        }
      }, 1000);
      return () => clearInterval(currentCount);
    },[]);
    return count;
}
export default useCounter;
