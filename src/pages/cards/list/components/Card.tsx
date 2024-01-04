import { memo, useEffect, useReducer, useRef, useState } from "react";
import Blank from "./Blank";
import "../style/Card.css";
import { useCards } from "../../create/hooks/useCards";
import CardEditor from "./CardEditor/CardEditor";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { TCard } from "../../../../types";

type CardProps = {
  card: TCard;
  mode: string;
};

export default function Card({ card, mode }: CardProps) {
  const { id, quiz, hint, answer, note, correct, uncorrect, rating } = card;
  if (quiz === "") return;
  const [side, setSide] = useState(true);
  const [edit, toggleEdit] = useReducer((edit) => !edit, false);
  const [input, setInput] = useState("");
  const { deleteCard, updateResult } = useCards();
  const ref = useRef<HTMLDivElement>(null);
  const onFlip = () => setSide((prev) => !prev);
  const color = `rgba(
    ${(uncorrect / (uncorrect + correct + Number.MIN_VALUE)) * 255},
    ${(correct / (uncorrect + correct + Number.MIN_VALUE)) * 255},
    0, 1)`;

  const scroll = (option: ScrollOptions) =>
    ref.current?.scrollIntoView(option);

  useEffect(() => {
    if (id === localStorage["currentCard"]) scroll({ behavior: "instant" });
  }, []);

  return (
    <div
      ref={ref}
      className={`container card flash-card`}
      onClick={() => (localStorage["currentCard"] = id)}
    >
      <div className="card-head">
        <EditButton
          className={"edit-button"}
          onClick={toggleEdit}
          fillColor={"rgb(1,1,1)"}
        />
        <DeleteButton
          className={"delete-button"}
          onClick={() => deleteCard(id)}
          fillColor={"rgb(1,1,1)"}
        />
        <div className="statistics" style={{ color }}>
          {correct}/{uncorrect + correct}
          <span className="mr-3"> </span>
          {rating}%
        </div>
      </div>
      <div className="card-body">
        {!edit && (
          <>
            {quiz && ((mode === "practice" && side) || mode === "preview") && (
              <p className="quiz">{quiz}</p>
            )}
            {hint && mode === "practice" && side && (
              <p className="hint">{hint}</p>
            )}
            {answer && mode === "practice" && side && (
              <Blank
                {...{
                  id,
                  input,
                  setInput,
                  answer,
                  updateResult,
                  onfocus: () => scroll({ behavior: "smooth" }),
                }}
              />
            )}
            {answer &&
              ((mode === "practice" && !side) || mode === "preview") && (
                <p className="answer">{answer}</p>
              )}
            {note && ((mode === "practice" && !side) || mode === "preview") && (
              <p className="note">{note}</p>
            )}
            {mode === "practice" && (
              <div className="flip-button" onClick={onFlip}></div>
            )}
          </>
        )}

        {edit && (
          <CardEditor
            {...{
              card,
              onSuccess: toggleEdit,
              onCancel: toggleEdit,
            }}
          />
        )}
      </div>
    </div>
  );
}

export const PureCard = memo(Card);

/**
 * quiz: practice & A  | review
 * hint: practice & A
 * blank: practice & A
 * answer: practice & B  | review
 * note: practice & B  | review
 * creator: edit
 */
