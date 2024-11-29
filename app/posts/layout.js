
'use client'

import styles from "./page.module.css";
import { PostsProvider } from "./PostsContext";
import { useEffect } from "react";

export default function PostsLayout({ children }) {
  

    useEffect(()=>{
       console.log("layout use effect 1 time on routing")
    },[])


    return (
        <PostsProvider>
            <div className={styles.layout}>
                <div className={styles.left}>///</div>

                <div>{children}</div>

                <div className={styles.right}>///</div>
            </div>
        </PostsProvider>

    );
}