'use client'

import { useEffect, useState } from "react";
import Child from "./Child";



const Parent = () => {
const [item, setItem] = useState({})


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setItem(json))
  }, [])


  return (
    <>
    <div className="border-2 border-blue-500 p-5">Parent
    <Child item={item}/>
    </div>
    </>
  )
}

export default Parent;