import { createContext, useContext, useState } from "react";

const WalletContext = createContext(null);

export function WalletProvider({ children }) {
  const [balance, setBalance] = useState(850); // starting mock balance, in Rs

  const addCredits = (amount) => {
    setBalance((prev) => prev + amount);
  };

  const deductCredits = (amount) => {
    if (amount > balance) return false;
    setBalance((prev) => prev - amount);
    return true;
  };

  return (
    <WalletContext.Provider value={{ balance, addCredits, deductCredits }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used inside a WalletProvider");
  return ctx;
}