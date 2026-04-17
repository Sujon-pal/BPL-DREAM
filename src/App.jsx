import { Suspense } from "react";
import "./App.css";
import AvailablePlayer from "./Component/AvailablePlayer";
import Navbar from "./Component/Navbar";


const fetchPlayer = async () =>{
  const res = await fetch("../players.json")
  return res.json();
}

function App() {

  const PlayerPromice = fetchPlayer()
  return (
    <>
      <Navbar></Navbar>

    <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
      <AvailablePlayer PlayerPromice={PlayerPromice}></AvailablePlayer>
    </Suspense>

    </>
  );
}

export default App;
