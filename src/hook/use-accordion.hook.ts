import { useState } from "react";

export const useHandleAccordion = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    const newIndices = activeIndices.includes(index)
      ? activeIndices.filter((i) => i !== index)
      : [...activeIndices, index];

    setActiveIndices(newIndices);
  };

  return { activeIndices, toggleAccordion };
};
