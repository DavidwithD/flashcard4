import { useCards } from "../../../create/hooks/useCards";
import { useState } from "react";
import { TCard } from "../../../../../types";
import "./CardEditor.css";

type CardEditorProps = {
  card: TCard;
  onSuccess: React.DispatchWithoutAction;
  onCancel: React.DispatchWithoutAction;
};
export default function CardEditor({
  card,
  onSuccess,
  onCancel,
}: CardEditorProps) {
  const { replaceCard } = useCards();
  const [newCard, setCard] = useState<TCard>(card);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCard({ ...newCard, [e.target.name]: e.target.value });
  const onEscape = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") onCancel();
  };
  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    replaceCard(newCard);
    if (onSuccess) onSuccess();
  };

  return (
    <div className="create-panel container">
      <form name="cardCreatorForm" onSubmit={onsubmit}>
        <input
          className="form-control"
          name={"quiz"}
          placeholder={"quiz"}
          defaultValue={card["quiz" as keyof TCard]}
          onChange={onChange}
          onKeyDown={onEscape}
        />
        <input
          className="form-control"
          name={"hint"}
          placeholder={"hint"}
          defaultValue={card["hint" as keyof TCard]}
          onChange={onChange}
          onKeyDown={onEscape}
        />
        <input
          className="form-control"
          name={"answer"}
          placeholder={"answer"}
          defaultValue={card["answer" as keyof TCard]}
          onChange={onChange}
          onKeyDown={onEscape}
        />
        <input
          className="form-control"
          name={"note"}
          placeholder={"note"}
          defaultValue={card["note" as keyof TCard]}
          onChange={onChange}
          onKeyDown={onEscape}
        />
        <button className="btn btn-light" type="submit">
          edit
        </button>
        <button className="btn btn-light" onClick={onCancel} type="button">
          cancel
        </button>
      </form>
    </div>
  );

  // function Input({ item }: any) {
  //   return (
  //     <input
  //       className="form-control"
  //       name={item}
  //       placeholder={item}
  //       defaultValue={card[item as keyof TCard]}
  //       onChange={onChange}
  //       onKeyDown={onEscape}
  //     />
  //   );
  // }
}
