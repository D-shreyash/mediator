import Image from "next/image";
import { Inter } from "next/font/google";
import ProfilePage from "./components/profilePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <ProfilePage />;
}
