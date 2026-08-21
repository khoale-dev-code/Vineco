import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const SampleModalContext = createContext(null);

export function SampleModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      openSampleModal: () => setIsOpen(true),
      closeSampleModal: () => setIsOpen(false),
    }),
    [isOpen],
  );

  return (
    <SampleModalContext.Provider value={value}>
      {children}
    </SampleModalContext.Provider>
  );
}

export function useSampleModal() {
  const context = useContext(SampleModalContext);

  if (!context) {
    throw new Error(
      "useSampleModal must be used inside SampleModalProvider",
    );
  }

  return context;
}