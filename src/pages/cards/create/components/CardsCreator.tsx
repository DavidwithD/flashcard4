import { useEffect, useState } from "react";
import { combineAll } from "../../../../utils.tsx";
import { useCards } from "../hooks/useCards";
import { TCard } from "../../../../types.tsx";
import { Textarea } from "./Textarea.tsx";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "./ButtonGroup.tsx";

type Props = {
  mode: string;
};

export default function CardsCreator({ mode }: Props) {
  const keys = ["answer", "quiz", "hint", "note"] as (keyof TCard)[];
  const { cards, newCard } = useCards();

  const initCards = mode === "add" ? [newCard()] : cards;
  const [pageCards, setPageCards] = useState<TCard[]>(initCards);
  const [preview, setPreview] = useState(false);

  // funcs
  const startPreview = () => setPreview(true);
  const endPrevirew = () => setPreview(false);

  return (
    <div className="cards-creator">
      {!preview && (
        <Editor {...{ keys, pageCards, setPageCards, startPreview }} />
      )}
      {preview && <Previewer {...{ keys, pageCards, endPrevirew, mode }} />}
    </div>
  );
}

// inner functions
// Editor
type EditorProps = {
  keys: (keyof TCard)[];
  pageCards: TCard[];
  setPageCards: React.Dispatch<React.SetStateAction<TCard[]>>;
  startPreview: () => void;
};
function Editor({ keys, pageCards, setPageCards, startPreview }: EditorProps) {
  const { newCard } = useCards();
  const [editKey, setKey] = useState<keyof TCard | "all">("all");
  const [textValue, setTextValue] = useState<string>("");

  // functions
  // string process functions
  const split = (s: string) => s.split(/\n|\.|\?|。|？|:/);
  const trimLines = (lines: string[]) => lines.map((line) => line.trim());
  const removeEmptyLines = (lines: string[]) =>
    lines.filter((line) => line.match(/^[^\n]+$/));
  const getLines: (str: string) => string[] = combineAll(
    split,
    trimLines,
    removeEmptyLines
  );
  const splitByLine = (s: string) => s.split(/\n/);

  // card array functions
  const createCardFromLine = (line: string): TCard => {
    const data = split(line);
    const pairs = keys.map((key, i) => [key, data[i] ?? ""]);
    const obj = Object.fromEntries(pairs);
    const card = newCard();
    return { ...card, ...obj };
  };
  const updateCards = (
    cards: TCard[],
    data: string[],
    key: keyof TCard
  ): TCard[] => {
    /**
     * When more data and less cards, create new cards and replace [key] property.
     * When more cards and less data, reset [key] property to empty string.
     */
    const maxLen = Math.max(cards.length, data.length);
    return [...Array(maxLen)].map((_, i) => ({
      ...(cards[i] ?? newCard()),
      [key]: data[i] ?? "",
    }));
  };
  const updateFromText = (text: string) => {
    if (editKey === "all") return;
    const newCards = updateCards(pageCards, splitByLine(text), editKey);
    setPageCards(newCards);
  };
  const updateCard = (newCard: TCard, index: number) => {
    pageCards[index] = newCard;
    setPageCards([...pageCards]);
  };
  const addEmptyCard = () => setPageCards([...pageCards, newCard()]);
  // events
  const handlePreviewClick = () => {
    updateFromText(textValue);
    startPreview();
  };
  const handleFileChange = (event: any) => {
    const file: File = event.target.files[0];
    if (!file) {
      alert("Fail to read file.");
      return;
    }
    if (editKey === "all")
      file
        .text()
        .then(splitByLine)
        .then(trimLines)
        .then(removeEmptyLines)
        .then((lines) => lines.map((line) => createCardFromLine(line)))
        .then((cards: TCard[]) => setPageCards(cards))
        .catch(console.error);
    else
      file
        .text()
        .then(getLines)
        .then((data: string[]) => updateCards(pageCards, data, editKey))
        .then((cards: TCard[]) => setPageCards(cards))
        .catch(console.error);
  };
  const handleReadClipboard = () => {
    if (editKey === "all")
      navigator.clipboard
        .readText()
        .then(splitByLine)
        .then(trimLines)
        .then(removeEmptyLines)
        .then((lines) => lines.map((line) => createCardFromLine(line)))
        .then((cards) => setPageCards(cards))
        .catch(console.error);
    else
      navigator.clipboard
        .readText()
        .then(getLines)
        .then((data) => updateCards(pageCards, data, editKey))
        .then((cards) => setPageCards(cards))
        .catch(console.error);
  };
  const handleKeyChange = (
    oldkey: keyof TCard | "all",
    newKey: keyof TCard | "all"
  ) => {
    if (oldkey === newKey) return;
    else if (oldkey !== "all") updateFromText(textValue);
    setKey(newKey);
  };

  // effect
  // when editKey changed, reset textValue
  useEffect(() => {
    if (editKey === "all") return;
    if (pageCards.length === 0) setTextValue("");
    else {
      const newText = pageCards
        .map((card) => (card[editKey] as string) ?? "")
        .reduce((a, b) => `${a}\n${b}`);
      setTextValue(newText);
    }
  }, [pageCards, editKey]);

  return (
    <div className="editor">
      <div className="item-button-box">
        <ButtonGroup<keyof TCard | "all">
          items={["all", ...keys]}
          onClick={handleKeyChange}
        />
      </div>
      <div className="input-box">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleReadClipboard}>read clipboard</button>
      </div>
      <div className="edit-area">
        {editKey !== "all" && (
          <Textarea
            numOfLines={pageCards.length}
            value={textValue}
            onValueChange={setTextValue}
          ></Textarea>
        )}
        {editKey === "all" && (
          <AllEditor
            pageCards={pageCards}
            items={keys}
            updateCard={updateCard}
            addCard={addEmptyCard}
          />
        )}
      </div>
      <div className="edit-button-box">
        <button onClick={handlePreviewClick}>preview</button>
      </div>
    </div>
  );
}

// AllEditor
type AllEditorProps = {
  pageCards: TCard[];
  items: (keyof TCard)[];
  updateCard: any;
  addCard: any;
};
function AllEditor({ pageCards, updateCard, addCard, items }: AllEditorProps) {
  return (
    <div className="all-editor">
      <ol>
        {pageCards.map((card, i) => (
          <CardEditForm
            key={i}
            card={card}
            index={i}
            items={items}
            updateCard={updateCard}
          />
        ))}
      </ol>
      <button onClick={addCard}>add</button>
    </div>
  );
}
function CardEditForm({
  card,
  index,
  items,
  updateCard,
}: {
  card: TCard;
  index: number;
  items: (keyof TCard)[];
  updateCard: any;
}) {
  const [buffer, setBuffer] = useState(card);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setBuffer({ ...card });
  }, [card]);

  return (
    <li>
      <form
        key={index}
        onSubmit={(e) => {
          e.preventDefault();
          setEditing(false);
          updateCard(buffer, index);
        }}
      >
        <div className="form-input">
          {items.map((item) => (
            <div key={item}>
              <label htmlFor={item + index}>{item}:</label>
              <input
                type="text"
                name={item}
                id={item + index}
                data-index={index}
                value={buffer[item]}
                onChange={(e) => {
                  setBuffer({ ...buffer, [item]: e.target.value });
                  setEditing(true);
                }}
              ></input>
            </div>
          ))}
        </div>
        {editing && <input type="submit" name="ok" value={"ok"}></input>}
      </form>
    </li>
  );
}

// Previewer
type PreviewerProps = {
  keys: (keyof TCard)[];
  pageCards: TCard[];
  endPrevirew: () => void;
  mode: string;
};
function Previewer({ keys, pageCards, endPrevirew, mode }: PreviewerProps) {
  const { addCards, replaceAllCards } = useCards();
  const [previewKey, setPreviewKey] = useState("all");
  // event
  const handleSubmit = () => {
    const ret = pageCards.filter((card) => card.quiz && card.quiz !== "");
    if (mode === "add") addCards(pageCards);
    else if (mode === "edit") replaceAllCards(ret);
    alert(`${pageCards.length} cards ${mode}ed.`);
    const navigate = useNavigate();
    setTimeout(() => navigate(-1), 1000);
  };
  const handleKeyChange = (
    _: keyof TCard | "all",
    newKey: keyof TCard | "all"
  ) => {
    setPreviewKey(newKey);
  };
  1;
  return (
    <div className="previer">
      <ButtonGroup<keyof TCard | "all">
        items={["all", ...keys]}
        onClick={handleKeyChange}
      />

      {pageCards.length === 0 && <p>no content</p>}

      {/* ordered list for display */}
      <ol className="list">
        {previewKey === "all" &&
          pageCards.map((card) => (
            <li key={card.id}>
              {keys.map((item, i) => (
                <p key={i}>
                  {item}:{card[item as keyof TCard] ?? ""}
                </p>
              ))}
            </li>
          ))}
        {previewKey !== "all" &&
          pageCards.map((card) => (
            <li key={card.id}>{card[previewKey as keyof TCard]}</li>
          ))}
      </ol>

      <div className="edit-button-box">
        <button onClick={handleSubmit}>submit</button>
        <button onClick={endPrevirew}>edit</button>
      </div>
    </div>
  );
}
