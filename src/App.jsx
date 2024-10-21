
import headerImg from "../public/header-img.webp";
import InnerMain from "./components/InnerMain";
import TabSection from "./components/TabSection/TabSection";
import About from "./components/About/About";
import Settings from "./components/Settings";
import Registration from "./components/Registration";
import { useState } from "react";
import Topics from "./components/Topics/Topics";


export default function App() {
  const [tab, setTab] = useState("main")

  return (
    <>
      <div className="header-container">
        <img className="header-image" src={headerImg} alt="header-cap" />
      </div>
      <header>
        <TabSection active={tab} onChange={(current)=> setTab(current)}/>
      </header>
      <main>
        {tab === "about" && <About />}
        {tab === "main" && <InnerMain />}
        {tab === "topics" && <Topics />}
        {tab === "settings" && <Settings />} 
        {tab === "registration" && <Registration />}
      </main>
    </>
  )
}


