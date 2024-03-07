import React from "react";
export function useKey(id, setting) {
  React.useEffect(() => {
    const handleEscDown = (event) => {
      if (event.keyCode === id) {
        event.preventDefault();
        setting([]);
      }
    };
    document.addEventListener("keydown", handleEscDown);
    return () => document.removeEventListener("keydown", handleEscDown);
  }, [id, setting]);
}
