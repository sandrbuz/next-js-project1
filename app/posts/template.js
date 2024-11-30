"use client"

import { useEffect } from "react";



export default function DashboardTemplate({ children }) {


    useEffect(()=>{
        console.log("template use effect every time on routing (layout.js 1 time)")
     },[])


    return (
      <div>
        <div>{children}</div>
      </div>
    );
  }