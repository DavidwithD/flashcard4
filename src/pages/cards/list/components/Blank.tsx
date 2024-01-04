export default function Blank({
  id,
  input,
  setInput,
  answer,
  updateResult,
  onfocus,
}: any) {
  // states
  // inner functions
  const removeSpace = (s: string) => s?.replaceAll(/\s/g, "") ?? "";
  const getCorrectRatio = (answer: string, input: string) => {
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

  const answerWithoutSpace = removeSpace(answer);
  const inputWithoutSpace = removeSpace(input);
  const correctRatio = getCorrectRatio(answerWithoutSpace, inputWithoutSpace);
  let isCorrect = correctRatio === 1;
  let inputStyle = getStyle(correctRatio);
  const correctStyle = isCorrect ? "blank-correct" : "";
  // event handlers
  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab" && !e.shiftKey && e.keyCode !== 229) {
      updateResult(id, isCorrect);
    }
  };

  if (!answer) return null;

  return (
    <div className="blank">
      <input
        className={`blank-input form-control ${correctStyle}`}
        style={{ fontSize: "1.5rem", ...inputStyle }}
        value={input}
        placeholder="input here"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeydown}
        onFocus={onfocus}
      ></input>
    </div>
  );
}
