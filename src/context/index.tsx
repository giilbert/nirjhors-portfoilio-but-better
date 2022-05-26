import { createContext, MutableRefObject, useContext, useRef } from "react";

const RefContext = createContext(null);

interface IRefContext {
  projects: MutableRefObject<HTMLDivElement>;
  headingRef: MutableRefObject<HTMLDivElement>;
  imgRef: MutableRefObject<HTMLDivElement>;
  about: MutableRefObject<HTMLDivElement>;
}

export const RefProvider: React.FC = ({ children }) => {
  const projects = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);

  return (
    <RefContext.Provider value={{ projects, about, headingRef, imgRef }}>
      {children}
    </RefContext.Provider>
  );
};

export const useRefs = () => useContext<IRefContext>(RefContext);
