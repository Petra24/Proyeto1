import { useState } from "react";

export const UseModal = (initialMode = false) => {
  const [isOpened, setIsOpenet] = useState(initialMode);
  const toggle = () => setIsOpenet(!isOpened);
  return [isOpened, setIsOpenet, toggle];
}