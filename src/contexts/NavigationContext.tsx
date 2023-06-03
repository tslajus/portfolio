import { createContext, useState, useContext, ReactNode } from "react";

type NavigationContextType = {
  hoveredIndex: number | null;
  setHoveredIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

type NavigationProviderProps = {
  children: ReactNode | ReactNode[];
};

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  return (
    <NavigationContext.Provider value={{ hoveredIndex, setHoveredIndex }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useHover must be used within a NavigationProvider");
  }
  return context;
};
