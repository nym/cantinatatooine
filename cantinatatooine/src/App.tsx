import React from "react";
import './App.css';
import { RouterProvider } from "react-router-dom";
import store from "./app/store";
import router from "./app/router";
import { Provider } from "react-redux";
import PersonListPage from "./pages/list/PersonListPage";
import PersonDetailPage from "./pages/detail/PersonDetailPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          STAR WARS: THE API
        </h2>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>

      </header>
    </div>
  );
}

export default App;
