import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TYPE_SPEED_MS = 45; // delay between each typed character
const HOLD_MS = 1400; // how long a fully-typed message stays before the next one overwrites it

function SpeechBubble({ messages, x, y }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(0);

  // Reset the typewriter whenever we move to a new message
  useEffect(() => {
    setTypedLength(0);
  }, [messageIndex]);

  useEffect(() => {
    const message = messages[messageIndex];

    if (typedLength >= message.length) {
      const holdTimer = setTimeout(() => {
        setMessageIndex((i) => (i + 1) % messages.length);
      }, HOLD_MS);
      return () => clearTimeout(holdTimer);
    }

    const typeTimer = setTimeout(() => {
      setTypedLength((n) => n + 1);
    }, TYPE_SPEED_MS);
    return () => clearTimeout(typeTimer);
  }, [typedLength, messageIndex, messages]);

  const visibleText = messages[messageIndex].slice(0, typedLength);

  return (
    <div
      style={{
        position: "fixed",
        left: x,
        top: y,
        zIndex: 61,
        pointerEvents: "none",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={messageIndex}
          initial={{ opacity: 0, scale: 0.92, y: 4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.18 }}
          className="relative bg-surface border border-border text-primary text-xs sm:text-sm font-mono px-3 py-2 rounded-xl shadow-[0_0_15px_rgba(57,255,20,0.12)] max-w-[210px] whitespace-normal"
        >
          {visibleText}
          <span className="cursor-blink">|</span>

          {/* speech-bubble tail pointing down toward the bird */}
          <span
            className="absolute -bottom-[7px] left-6 w-3 h-3 bg-surface border-b border-r border-border rotate-45"
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default SpeechBubble;