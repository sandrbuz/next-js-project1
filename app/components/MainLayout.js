"use client";

import { usePathname } from "next/navigation";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function MainLayout({ children }) {
  const pathname = usePathname();
  const isContactsPage = pathname === "/contacts";

  return (
    <>
      {!isContactsPage && <Header />}
      {children}
      {!isContactsPage && <Footer />}
    </>
  );
}
