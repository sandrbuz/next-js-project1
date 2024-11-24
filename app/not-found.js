"use client"

import { useEffect } from "react";
import { redirect } from "next/navigation";


export default function NotFound() {

  useEffect(() => {
    document.title = "404 error";
    setTimeout(() => {
      redirect('/')
    }, 3000)
  }, [])



  return (
    <div>
      <h1>404 - Страница не найдена</h1>
      <p>К сожалению, запрашиваемая страница не существует.</p>
    </div>
  );
}