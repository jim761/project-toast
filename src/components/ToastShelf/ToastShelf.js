import React from "react";
import VisuallyHidden from "../VisuallyHidden";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastProviderContext } from "../App";
function ToastShelf() {
  const { toasts } = React.useContext(ToastProviderContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ variant, msg, key }) => (
        <li className={styles.toastWrapper} key={key}>
          <Toast variant={variant} delkey={key}>
            <VisuallyHidden>{variant} - </VisuallyHidden>
            {msg}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
