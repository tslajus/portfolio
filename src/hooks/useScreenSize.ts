import { useContext } from "react";
import { ScreenSizeContext } from "@/contexts/ScreenSizeContext";

const useScreenSize = () => {
  const screenSize = useContext(ScreenSizeContext);

  return screenSize;
};

export default useScreenSize;
