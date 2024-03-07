import React from "react";

import Footer from "../Footer";
import ToastPlayground from "../ToastPlayground";
export const ToastProviderContext = React.createContext();

function App() {
  const [msg, setMsg] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [toasts, setToasts] = React.useState([]);

  function handleDismiss(key) {
    const temp = toasts.filter((toast) => toast.key !== key);
    setToasts(temp);
  }

  return (
    <>
      <ToastProviderContext.Provider
        value={{
          msg,
          setMsg,
          variant,
          setVariant,
          toasts,
          setToasts,
          handleDismiss,
        }}
      >
        <ToastPlayground />
      </ToastProviderContext.Provider>
      <Footer />
    </>
  );
}

export default App;
