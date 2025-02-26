import { ReactNode } from "react";
// import Navbar from "@/components/Navbar";

export default function HomeLayout({ children } : { children: ReactNode }) {
  return (
    <main>
      {/* <Navbar logo={""} links={[]} /> */}
      { children }
    </main>
  )
}