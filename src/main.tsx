import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { useModal } from "./store/appText.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";

const MainApp = () => {
  return (
    <React.StrictMode>
      <>
      <p>Main App</p>
      </>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<MainApp />);
