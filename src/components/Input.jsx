import { useState } from "react";

export function Input({ label, refer, val = "", type = "text" }) {
  const [value, setValue] = useState(val);

  return (
    <div className="box-border flex flex-col">
      <label className="text-sm relative -top-1 text-[#C0C0C0]">{label}</label>
      <input
        className="border-b-2 border-solid outline-none text-center box-border bg-inherit"
        type={type}
        ref={refer}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
