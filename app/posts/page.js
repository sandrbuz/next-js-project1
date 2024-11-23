export const metadata = {
    title: "Posts", // Уникальное имя страницы для вкладки браузера
    description: "This is the posts page", // Описание страницы
  };


import styles from "./page.module.css"
import Link from "next/link";


export default function PostsPage() {
    return (
        <div className={styles.postsWrapper}>
            <div className={styles.some}>Posts</div>
        </div>
    )
}
