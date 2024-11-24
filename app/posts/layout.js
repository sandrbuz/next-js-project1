import styles from "./page.module.css";
import { PostsProvider } from "./PostsContext";

export default function PostsLayout({ children }) {
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