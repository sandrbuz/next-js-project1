'use client'

import styles from "./page.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function PostsLayout({ children }) {
   const pathname = usePathname();

    return (
        <div className={styles.layout}>
            <div className={styles.links}>
                <Link  href={"/dialogs/1"} className={pathname === "/dialogs/1" ? styles.active : ""}>Dima</Link>
                <Link  href={"/dialogs/2"} className={pathname === "/dialogs/2" ? styles.active : ""}>Andrey</Link>
                <Link  href={"/dialogs/3"} className={pathname === "/dialogs/3" ? styles.active : ""}>Sveta</Link>
                <Link  href={"/dialogs/4"} className={pathname === "/dialogs/4" ? styles.active : ""}>Sasha</Link>
            </div>
            <div className={styles.chat}>{children}</div>
        </div>
    );
}