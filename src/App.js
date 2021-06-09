import React from "react";
import Search from "./components/Search";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto p-3 sm:p-8">
      <Search />
      <Posts />
    </div>
  );
}

export default App;
