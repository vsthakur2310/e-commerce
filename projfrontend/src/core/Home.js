import React from "react";
import { API } from "../backend";

function Home() {
  console.log("API is", API);
  return (
    <div>
      <h1>Hello front end</h1>
    </div>
  );
}

export default Home;
