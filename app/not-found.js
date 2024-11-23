"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";



export default function NotFound() {
  const router = useRouter();

  useEffect(()=>{
    setTimeout(()=>{
      router.push('/');
    }, 3000)
  },[])

    return (
      <div>
        <h1>404 - Страница не найдена</h1>
        <p>К сожалению, запрашиваемая страница не существует.</p>
      </div>
    );
  }