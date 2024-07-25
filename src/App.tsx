import { useState } from "react";
import "./App.css";
import AuthRouter from "./router/AuthRouter";
import MainRouter from "./router/MainRouter";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  return (
    <div id="app" className="h-screen">
      <MainRouter/>
    </div>
  );
}

export default App;
{
  /*       {!isLogged && (
        <button
          onClick={handleLogin}
          className="bg-red-500 text-white p-2 rounded"
        >
          Go to app simulate xd
        </button> */
}
