import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import Analyst from "./images/Analyst";
import Boarding from "./images/Boarding";
import Advisor from "./images/Advisor";
import Charts from "./images/Charts";
import Icon1 from "./images/Icon1";
import Icon3 from "./images/Icon3";
import Icon2 from "./images/Icon2";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Ubuntu', sans-serif",
    mainBg: "#5F174C",
    lineColor: "#fff",
    images: [
      {
        icon: <Icon1 color="#fff" />,
      },
      {
        icon: <Icon2 color="#fff" />,

        containerBg: "#000",
      },
      {
        icon: <Icon3 color="#000" />,

        containerBg: "#fff",
      },
      {
        icon: <Icon1 color="#fff" />,
      },
      {
        icon: <Icon1 color="#fff" />,
      },
      {
        icon: <Icon2 color="#fff" />,

        containerBg: "#000",
      },
      {
        icon: <Icon3 color="#000" />,

        containerBg: "#fff",
      },
    ],

    mainDiv: {
      bg: "#fff",
      heading: "Central AI Hub",
      headingColor: "#571044",
    },

    features: [
      {
        icon: <Analyst firstColor="#fff" secondColor="#C11EA9" />,
        title: "AI <br/> Co-Analyst",
        titleColor: "#FFF",
        border: "2px solid #752961",
        bg: "#571044",
      },
      {
        icon: (
          <Charts
            firstColor="#fff"
            secondColor="#5F174C"
            thirdColor="#C11EA9"
          />
        ),
        title: "Analysis <br/> Charts",
        titleColor: "#FFF",
        border: "2px solid #752961",
        bg: "#571044",
      },
      {
        icon: <Boarding firstColor="#fff" secondColor="#C11EA9" />,
        title: "Onboarding <br/> Flow",
        titleColor: "#FFF",
        border: "2px solid #752961",
        bg: "#571044",
      },
    ],
    advisor: {
      icon: (
        <Advisor firstColor="#fff" secondColor="#C11EA9" thirdColor="#7B1968" />
      ),
      title: "Wealth Advisor",
      titleColor: "#fff",
      bg: "#7B1968",
    },
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,
          "--lineColor": allData.lineColor,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
