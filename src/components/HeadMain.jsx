import InnerMain from "./InnerMain";
import TabSection from "./TabSection/TabSection";
import About from "./About";
import Settings from "./Settings";
import Registration from "./Registration";
import { useState } from "react";

export default function HeadMain(){
  const [tab, setTab] = useState("main")

  return(
    <>
      <div className="head_main">
        <TabSection active={tab} onChange={(current)=> setTab(current)}/>
        {tab === "about" && <About />}
        {tab === "ma in" && <InnerMain />}
        {tab === "settings" && <Settings />}
        {tab === "registration" && <Registration />}
      </div>
    </>
  )
}