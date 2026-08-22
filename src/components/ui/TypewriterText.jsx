import { useEffect, useState } from "react";

const TYPE_SPEED_MS = 16; // ms per character while typing forward
const ERASE_SPEED_MS = 9; // ms per character while erasing backward (a touch snappier)

// Types `text` forward, one character at a time, while `active` is true.
// When `active` goes false, it erases backward to empty instead of just disappearing.
function TypewriterText({ text, active, className }) {
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (active) {
      if (length >= text.length) return;
      const t = setTimeout(() => setLength((n) => n + 1), TYPE_SPEED_MS);
      return () => clearTimeout(t);
    }
    if (length <= 0) return;
    const t = setTimeout(() => setLength((n) => n - 1), ERASE_SPEED_MS);
    return () => clearTimeout(t);
  }, [active, length, text]);

  const isMidAnimation = length > 0 && length < text.length;

  return (
    <span className={className}>
      {text.slice(0, length)}
      {(active || isMidAnimation) && <span className="cursor-blink">|</span>}
    </span>
  );
}

export default TypewriterText;