import { useState, useEffect } from "react";

export const ToggleButton = ({ value, onChange }) => {
  const [enabled, setEnabled] = useState(value ?? false);

  useEffect(() => {
    if (value !== undefined) {
      setEnabled(value);
    }
  }, [value]);

  const toggle = () => {
    const newValue = !enabled;
    setEnabled(newValue);
    onChange?.(newValue); 
  };

  return (
    <button
      onClick={toggle}
      className={`relative inline-flex items-center h-6 md:h-8 w-11 md:w-14 rounded-full transition-colors duration-300 ${
        enabled ? "bg-green-200" : "dark:bg-zinc-500 bg-zinc-100"
      }`}
    >
      <span
        className={`inline-block w-4 h-4 md:w-5 md:h-5 transform  rounded-full transition-transform duration-300 ${
          enabled ? "translate-x-6 md:translate-x-8 bg-green-500" : "bg-zinc-700 translate-x-1"
        }`}
      />
    </button>
  );
};
