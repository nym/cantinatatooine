import "./App.css";
import router from "./app/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>STAR WARS: THE API</h2>

        <RouterProvider router={router} />
      </header>
      <div></div>
    </div>
  );
}

export default App;
