import { useState } from "react";
import { StyleInputWrapper } from "./Input.style";

export function Input({ label, refer, initialValue, type = "text" }) {
  const [value, setValue] = useState(initialValue);

  return (
    <StyleInputWrapper>
      <label>{label}</label>
      <input
        type={type}
        ref={refer}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </StyleInputWrapper>
  );
}
