import { useState } from "react";

function useToggle() {
  const [status, setStatus] = useState(false);

  const setTrue = () => {
    setStatus(true);
  };

  const setFalse = () => {
    setStatus(false);
  };

  return { status, setTrue, setFalse };
}

export default useToggle;
