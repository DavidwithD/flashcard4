import { useState } from "react";
import { v4 } from "uuid";

export const useInput = (
  initialValue: string,
  placeholder: string,
  required: boolean
) => {
  const [value, setValue] = useState(initialValue);
  const key = v4();
  return {
    props: {
      id: key,
      value,
      placeholder: placeholder,
      required: required,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value),
    },
    onReset: () => setValue(initialValue),
  };
};
