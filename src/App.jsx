import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Homepage/Banner/Banner";
import Players from "./Components/Homepage/Players/Players";
import Navbar from "./Components/Navbar/Navbar";

const fetchPlayer = async() => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const playersPromise = fetchPlayer()
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>

      <Players playersPromise={playersPromise} />
      </Suspense>
    </>
  );
}

export default App;
