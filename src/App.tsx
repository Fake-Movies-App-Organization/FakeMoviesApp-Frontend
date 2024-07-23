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
    <div id="app" className="h-screen bg-red-300">
      {isLogged ? <MainRouter /> : <AuthRouter />}
      {!isLogged && (
        <button
          onClick={handleLogin}
          className="bg-red-500 text-white p-2 rounded"
        >
          Go to app simulate xd
        </button>
      )}
    </div>
  );
}

export default App;
