export default function Blank({
  id,
  answer,
  currentInput,
  onChange,
  updateResult,
}: any) {
  // inner functions
  const removeSpace = (s: string) => s?.replaceAll(/\s/g, "") ?? "";
  const getCorrectRatio = (correctAnswer: string) => {
    const answer = removeSpace(correctAnswer);
    const input = removeSpace(currentInput);
    if (answer.length === 0) return 0;
    return answer.startsWith(input) ? input.length / answer.length : 0;
  };
  const getStyle = (correctRatio: number) => {
    switch (correctRatio) {
      case 0:
        return { color: "red" };
      case 1:
        return {
          color: `rgba(20, 255, 20, 1)`,
          border: "solid rgb(20, 255, 20)",
        };
      default:
        return {
          color: `rgba(20, ${correctRatio * 255}, 20, 0.7)`,
        };
    }
  };

  // event handlers
  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab" && !e.shiftKey && e.keyCode !== 229) {
      updateResult(id, isCorrect);
    }
  };

  const correctRatio = getCorrectRatio(answer);
  let isCorrect = correctRatio === 1;
  let inputStyle = getStyle(correctRatio);

  if (!answer) return null;
  return (
    <div className="blank">
      <input
        className="form-control"
        style={{ fontSize: "1.5rem", ...inputStyle }}
        value={currentInput}
        placeholder="input here"
        onChange={onChange}
        onKeyDown={handleKeydown}
      ></input>
    </div>
  );
}
