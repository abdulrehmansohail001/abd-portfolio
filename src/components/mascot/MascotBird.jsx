import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useMascot } from "../../context/MascotContext";
import SpeechBubble from "./SpeechBubble";
import { MASCOT_MESSAGES } from "../../data/mascotMessages";
import {
  FRAMES,
  GRID_COLS,
  GRID_ROWS,
  CELL_WIDTH,
  SHEET_SRC,
  RENDER_WIDTH,
  RENDER_HEIGHT,
} from "../../data/mascotConfig";

const LAND_SETTLE_MS = 260; // how long the "land" flutter plays before settling
const SCALE_X = RENDER_WIDTH / CELL_WIDTH;
const SHEET_RENDER_WIDTH = CELL_WIDTH * GRID_COLS * SCALE_X;
const SHEET_RENDER_HEIGHT = RENDER_HEIGHT * GRID_ROWS;

function computePerch(perchPosition) {
  return {
    x: perchPosition.left,
    y: window.innerHeight - perchPosition.bottom - RENDER_HEIGHT,
  };
}

function MascotBird() {
  const {
    phase,
    target,
    perchPosition,
    pointingMessages,
    arrived,
    landedHome,
    currentToken,
  } = useMascot();

  const [perch, setPerch] = useState(() => computePerch(perchPosition));
  const [frameSet, setFrameSet] = useState("idle");
  const [stepIndex, setStepIndex] = useState(0); // index into the frameSet's indices array
  const [facingLeft, setFacingLeft] = useState(false);

  const startTokenRef = useRef(null);
  const posRef = useRef(perch);

  useEffect(() => {
    const onResize = () => setPerch(computePerch(perchPosition));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [perchPosition]);

  useEffect(() => {
    if (phase === "perched") setFrameSet("idle");
    else if (phase === "pointing") setFrameSet("point");
    else if (phase === "flying-out" || phase === "flying-home") {
      setFrameSet("fly");
      startTokenRef.current = currentToken();
    }
  }, [phase, currentToken]);

  useEffect(() => {
    const { indices, fps } = FRAMES[frameSet];
    setStepIndex(0);
    const interval = setInterval(() => {
      setStepIndex((i) => (i + 1) % indices.length);
    }, 1000 / fps);
    return () => clearInterval(interval);
  }, [frameSet]);

 const destination =
  (phase === "flying-out" || phase === "pointing") && target ? target : perch;

  useEffect(() => {
    if (destination.x !== posRef.current.x) {
      setFacingLeft(destination.x < posRef.current.x);
    }
  }, [destination.x]);

  const handleFlightComplete = useCallback(() => {
    posRef.current = destination;
    if (phase === "flying-out") {
      setFrameSet("land");
      const t = setTimeout(() => arrived(startTokenRef.current), LAND_SETTLE_MS);
      return () => clearTimeout(t);
    }
    if (phase === "flying-home") {
      setFrameSet("land");
      const t = setTimeout(() => landedHome(), LAND_SETTLE_MS);
      return () => clearTimeout(t);
    }
  }, [phase, destination, arrived, landedHome]);

  // Resolve current frame index (0-15) -> row/col -> background-position
  const frameIdx = FRAMES[frameSet].indices[stepIndex];
  const row = Math.floor(frameIdx / GRID_COLS);
  const col = frameIdx % GRID_COLS;
  const bgX = -(col * RENDER_WIDTH);
  const bgY = -(row * RENDER_HEIGHT);

  return (
    <>
      <motion.div
        aria-hidden="true"
        initial={false}
        animate={{ x: destination.x, y: destination.y }}
        onAnimationComplete={handleFlightComplete}
        transition={{ type: "spring", stiffness: 90, damping: 16, mass: 0.9 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: RENDER_WIDTH,
          height: RENDER_HEIGHT,
          zIndex: 60,
          pointerEvents: "none",
          backgroundImage: `url(${SHEET_SRC})`,
          backgroundPosition: `${bgX}px ${bgY}px`,
          backgroundSize: `${SHEET_RENDER_WIDTH}px ${SHEET_RENDER_HEIGHT}px`,
          backgroundRepeat: "no-repeat",
          transform: facingLeft ? "scaleX(-1)" : "scaleX(1)",
          transformOrigin: "center",
          filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.35))",
        }}
      />

      {/* Speech bubble only shows while the bird is perched/idle on the side.
          Rendered as a sibling (not nested in the bird's div) so the bird's
          scaleX(-1) mirror for facing direction never flips the bubble text. */}
      {phase === "perched" && (
        <SpeechBubble
          messages={MASCOT_MESSAGES}
          x={perch.x + RENDER_WIDTH * 0.55}
          y={perch.y - 96}
        />
      )}

      {/* Shown once the bird has landed on a project card and is pointing at it.
          Positioned relative to the landing target, not the (now stale) perch. */}
      {phase === "pointing" && target && (
        <SpeechBubble
          messages={pointingMessages ?? ["Take a look at this"]}
          x={target.x + RENDER_WIDTH * 0.55}
          y={target.y - 96}
        />
      )}
    </>
  );
}

export default MascotBird;