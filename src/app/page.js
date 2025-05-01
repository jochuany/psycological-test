"use client"

import { useState } from "react";


export default function TODO() {

  const [count, setCount] = useState(0);

  const addCount = function () {
    setCount(count + 1);
  }

  return (
    <>
      <div>TODO</div>
      <div onClick={addCount}> 點擊次數： {count} </div>
    </>
  );
}