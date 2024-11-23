export const metadata = {
  title: "Home", // Уникальное имя страницы для вкладки браузера
  description: "This is the home page", // Описание страницы
};


import styles from "./page.module.css"
import Image from "next/image";
import image from "../public/image1.jpeg";
// import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* <Head>
        <title>Home</title>
      </Head> */}
      <div>
        Home page
      </div>
      <Image src={image} alt="Image 1" width="250" height="250" placeholder="blur" />
      <Image src="/image1.jpeg" alt="Image 2" width="250" height="250"/>
    </div>
  );
}
