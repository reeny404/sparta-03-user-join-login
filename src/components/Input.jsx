import { StyleInputWrapper } from "./Input.style";

export function Input({ label, value, setValue, type = "text" }) {
  return (
    <StyleInputWrapper>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </StyleInputWrapper>
  );
}
