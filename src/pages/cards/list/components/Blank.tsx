import { useState } from "react";

export default function Blank({
  id,
  input,
  setInput,
  prevResult,
  setPrevResult,
  answer,
  updateResult,
  onfocus,
}: any) {
  // states
  const [inputStyle, setInputStyle] = useState({});
  // inner functions
  const removeSpace = (s: string) => s?.replaceAll(/\s/g, "") ?? "";
  const getCorrectRatio = (answer: string, input: string) => {
    answer = removeSpace(answer);
    input = removeSpace(input);
    return answer.startsWith(input) ? input.length / answer.length : 0;
  };
  const getStyle = (correctRatio: number) => {
    switch (correctRatio) {
      case 0:
        return { color: "red" };
      case 1:
        return {
          color: `rgba(20, 255, 20, 1)`,
          border: "thick solid rgb(20, 255, 20)",
        };
      default:
        return {
          color: `rgba(20, ${correctRatio * 255}, 20, 0.7)`,
        };
    }
  };
  const fun = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    const correctRatio = getCorrectRatio(answer, value);
    setInputStyle(getStyle(correctRatio));

    let nextResult = correctRatio === 1;
    if (!prevResult && nextResult) {
      // false => true
      var cardsElement = document.getElementsByClassName("cards")[0];
      cardsElement?.classList.add("cards-correct");
      setTimeout(() => cardsElement?.classList.remove("cards-correct"), 200);
      setPrevResult(nextResult);
    }
    if (prevResult && !nextResult) {
      // true => false
      setPrevResult(nextResult);
    }
  };
  // event handlers
  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab" && !e.shiftKey && e.keyCode !== 229) {
      console.log(id, prevResult);
      updateResult(id, prevResult);
    }
  };
  if (!answer) return null;

  return (
    <div className="blank">
      <input
        className={`blank-input form-control`}
        style={{ fontSize: "1.5rem", ...inputStyle }}
        value={input}
        placeholder="input here"
        onChange={fun}
        onKeyDown={handleKeydown}
        onFocus={onfocus}
      ></input>
    </div>
  );
}
