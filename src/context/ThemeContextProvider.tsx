import React, { useState, type ReactNode } from "react"
import { ThemeContext } from "./ThemeContext"

export interface ThemeContextType {
  bgColor: string;
  textColor: string;
  dispColor: string;
  tglkbdbg: string;
  kbdbgColor: string;
  KbdkeytextColor: string;
  shadowColor: string;
  delreBackColor: string;
  equalColor: string;
  equalBgColor: string;
  delreShadowColor: string;
  equalShadowColor: string;

  // Handler und State-Setter Funktionen
  textColorHandler: (clr: string) => void;
  bgColorhandler: (clr: string) => void; // Hinzugefügt, da im Code implementiert
  setDispColor: React.Dispatch<React.SetStateAction<string>>;
  setTglKbdBg: React.Dispatch<React.SetStateAction<string>>;
  setKbdBgColor: React.Dispatch<React.SetStateAction<string>>;
  setKbdkeytextColor: React.Dispatch<React.SetStateAction<string>>;
  setShadowColor: React.Dispatch<React.SetStateAction<string>>;
  setDelReBackColor: React.Dispatch<React.SetStateAction<string>>;
  setEqualColor: React.Dispatch<React.SetStateAction<string>>;
  setEqualBgColor: React.Dispatch<React.SetStateAction<string>>;
  setDelReShadowColor: React.Dispatch<React.SetStateAction<string>>;
  setEqualShadowColor: React.Dispatch<React.SetStateAction<string>>;
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [bgColor, setBgColor] = useState('hsl(222, 26%, 31%)');
  const [textColor, setTextColor] = useState('white');
  const [dispColor, setDispColor] = useState('hsl(224, 36%, 15%)');
  const [tglkbdbg, setTglKbdBg] = useState('hsl(223, 31%, 20%)');
  const [kbdbgColor, setKbdBgColor] = useState('bg-[rgb(234,227,220)]');
  const [KbdkeytextColor, setKbdkeytextColor] = useState('text-[rgb(53,53,44)]');
  const [shadowColor, setShadowColor] = useState('rgb(180,165,151)');
  const [delreBackColor, setDelReBackColor] = useState('bg-[rgb(99,112,151)]');
  const [equalColor, setEqualColor] = useState('text-white');
  const [equalBgColor, setEqualBgColor] = useState('bg-[rgb(208,63,47)]');
  const [delreShadowColor, setDelReShadowColor] = useState('rgb(64,78,114)');
  const [equalShadowColor, setEqualShadowColor] = useState('rgb(147,38,26)');

  const textColorHandler = (clr: string) => {
    setTextColor(clr);
  }
  const bgColorhandler = (clr: string) => {
    setBgColor(clr)
  }

  return (
    <ThemeContext.Provider value={{
      bgColor, textColor, dispColor,
      tglkbdbg, kbdbgColor, KbdkeytextColor, shadowColor, delreBackColor, equalColor, equalBgColor, delreShadowColor, equalShadowColor,
      textColorHandler,
      bgColorhandler,
      setDispColor,
      setTglKbdBg,
      setKbdBgColor,
      setKbdkeytextColor,
      setShadowColor,
      setDelReBackColor,
      setEqualColor,
      setEqualBgColor,
      setDelReShadowColor,
      setEqualShadowColor
    }}>
      {children}
    </ThemeContext.Provider>
  );
}
