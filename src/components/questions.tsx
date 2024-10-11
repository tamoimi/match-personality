import { useState } from "react";

function Questions({ question, options, registerName }: any) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div>
      <label>{question}</label>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
        {options.map((option: any) => (
          <div
            key={option.value}
            onClick={() => handleSelect(option.value)}
            style={{
              padding: "1rem",
              border: selectedOption === option.value ? "2px solid blue" : "1px solid gray",
              borderRadius: "8px",
              cursor: "pointer",
              backgroundColor: selectedOption === option.value ? "#f0f8ff" : "white",
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
      {/* Hidden input to capture the selection */}
      <input type="hidden" value={selectedOption || ""} {...registerName} />
    </div>
  );
}

export default Questions;
