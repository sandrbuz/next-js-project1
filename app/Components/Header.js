"use client"

import Link from "next/link"
import styles from "./Header.module.css"
import { usePathname } from "next/navigation"


const navigation = [
    { id: 1, href: "/", title: "To home" },
    { id: 2, href: "/users", title: "To users" },
    { id: 3, href: "/posts", title: "To posts" }
]

export default function Header() {
    const pathname = usePathname();

    return (
        <header className={styles.headerMain}>
            {navigation.map((link) => (
                <Link  key={link.href} href={link.href} className={pathname === link.href ? styles.active : ""}>
                         {link.title}
                </Link>
            ))}
        </header>
    )
}