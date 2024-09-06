import { Inter } from "next/font/google";
import MainPage from "./components/mainPage";
import ProfilePage from "./components/profilePage";
import Businessprofile from "./components/Businessprofile";
import ProfileEdit from "./components/ProfileEdit";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <MainPage/>
    //<ProfilePage />
  );
}
