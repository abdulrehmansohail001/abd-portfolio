import { createContext, useContext, useRef, useState, useCallback } from "react";
import { PERCH_POSITION, RENDER_WIDTH } from "../data/mascotConfig";
const MascotContext = createContext(null);

// Public state machine values: "perched" | "flying-out" | "pointing" | "flying-home"
export function MascotProvider({ children }) {
  const [phase, setPhase] = useState("perched");
  const [target, setTarget] = useState(null); // { x, y } screen coords, top-left of bird landing spot
  const [activeCardId, setActiveCardId] = useState(null);
  const hoverTokenRef = useRef(0); // guards against rapid hover in/out races

  const flyTo = useCallback((cardId, rect) => {
    const myToken = ++hoverTokenRef.current;
    setActiveCardId(cardId);
    // Land just outside the top-left corner of the card
setTarget({ x: rect.left - RENDER_WIDTH + 24, y: rect.top - 24 });
    setPhase("flying-out");

    return myToken;
  }, []);

  const arrived = useCallback((token) => {
    if (token !== hoverTokenRef.current) return; // a newer hover already superseded this one
    setPhase("pointing");
  }, []);

  const flyHome = useCallback((cardId) => {
    // Only go home if nothing newer has taken over (e.g. mouse moved card->card)
    if (cardId !== undefined && cardId !== activeCardId) return;
    hoverTokenRef.current++; // invalidate any in-flight "arrived" calls
    setPhase("flying-home");
    setTarget(null);
  }, [activeCardId]);

  const landedHome = useCallback(() => {
    setPhase("perched");
    setActiveCardId(null);
  }, []);

  const value = {
    phase,
    target,
    activeCardId,
    perchPosition: PERCH_POSITION,
    flyTo,
    arrived,
    flyHome,
    landedHome,
    currentToken: () => hoverTokenRef.current,
  };

  return (
    <MascotContext.Provider value={value}>{children}</MascotContext.Provider>
  );
}

export function useMascot() {
  const ctx = useContext(MascotContext);
  if (!ctx) throw new Error("useMascot must be used within a MascotProvider");
  return ctx;
}
