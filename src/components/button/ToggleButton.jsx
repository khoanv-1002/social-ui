import { useState } from "react";

export const ToggleButton = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex items-center h-6 md:h-8 w-11 md:w-14 rounded-full transition-colors duration-300 ${
        enabled ? "bg-green-500" : "bg-zinc-500"
      }`}
    >
      <span
        className={`inline-block w-4 h-4 md:w-5 md:h-5 transform bg-white rounded-full transition-transform duration-300 ${
          enabled ? "translate-x-6 md:translate-x-8" : "translate-x-1"
        }`}
      />
    </button>
  );
};
