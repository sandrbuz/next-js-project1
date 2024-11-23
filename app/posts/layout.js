import styles from "./page.module.css";

export default function PostsLayout({ children }) {
    return (
        <div className={styles.layout}>
            <div className={styles.left}>///</div>

            <div>{children}</div>

            <div className={styles.right}>///</div>
        </div>
    );
}