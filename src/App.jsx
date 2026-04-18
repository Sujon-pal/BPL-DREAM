import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayer from "./Component/AvailablePlayer";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import SelectedPlayer from "./Component/SelectedPlayer";

const fetchPlayer = async () => {
  const res = await fetch("../players.json");
  return res.json();
};

  const PlayerPromice = fetchPlayer();
function App() {

  const [toggle, setToggle] = useState(true);
  const [availableBalance , setavailableBalance] = useState(90000000)
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="max-w-11/12 mx-auto mt-5 font-bold flex items-center justify-between">
        <h1>Available Player</h1>

        <div>
          <button
            onClick={() => setToggle(true)}
            className={`px-4 py-2 border border-gray-400 rounded-l-2xl border-r-0 ${toggle === true ? "bg-gradient-to-r from-yellow-300 to-pink-400" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`px-4 py-2 border border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? "bg-gradient-to-r from-yellow-300 to-pink-400" :""}`}
          >
            Selected <span>(0)</span>{" "}
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={<span className="loading loading-ring loading-xl "></span>}
        >
          <AvailablePlayer availableBalance={availableBalance} setavailableBalance={setavailableBalance} PlayerPromice={PlayerPromice}></AvailablePlayer>
        </Suspense>
      ) : (
        <SelectedPlayer></SelectedPlayer>
      )}

      <Footer></Footer>
    </>
  );
}

export default App;
