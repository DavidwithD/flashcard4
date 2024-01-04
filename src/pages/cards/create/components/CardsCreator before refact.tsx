import { useEffect, useState } from "react";
import { combineAll } from "../../../../utils.tsx";
import { useCards } from "../hooks/useCards.tsx";
import { TCard } from "../../../../types.tsx";
import { Textarea } from "./Textarea.tsx";
import { useNavigate } from "react-router-dom";

export default function CardsCreator({ mode }: any) {
  const keys = ["quiz", "hint", "answer", "note"] as (keyof TCard)[];
  const navigate = useNavigate();
  const { cards, newCard, addCards, replaceAllCards } = useCards();
  const [editKey, setKey] = useState<keyof TCard>(keys[0]);

  const initCards = mode === "add" ? [] : cards;
  const [pageCards, setPageCards] = useState<TCard[]>(initCards);
  const [textValue, setTextValue] = useState<string>("");
  const [file, setfile] = useState<File>();
  const [preview, setPreview] = useState(false);
  const [previewKey, setPreviewKey] = useState("all");

  // funcs
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
  const splitByLine = (s: string) => s.split(/\n/);
  const split = (s: string) => s.split(/\n|\.|\?|。|？/);
  const trimLines = (lines: string[]) => lines.map((line) => line.trim());
  const removeEmptyLines = (lines: string[]) =>
    lines.filter((line) => line.match(/^[^\n]+$/));
  const getLines = combineAll(split, trimLines, removeEmptyLines);
  const startPreview = () => setPreview(true);
  const endPrevirew = () => setPreview(false);

  // button event handlers
  const handleFileChange = (event: any) => {
    setfile(event.target.files[0]);
  };
  const handleReadClipboard = () => {
    navigator.clipboard
      .readText()
      .then(getLines)
      .then((data) => updateCards(pageCards, data, editKey))
      .then((cards) => setPageCards(cards))
      .catch(console.error);
  };
  const handleSubmit = () => {
    const ret = pageCards.filter((card) => card.quiz && card.quiz !== "");
    if (mode === "add") addCards(pageCards);
    else if (mode === "edit") replaceAllCards(ret);
    alert(`${pageCards.length} cards ${mode}ed.`);
    setTimeout(() => navigate(-1), 1000);
  };

  //effects
  useEffect(() => {
    if (!file) return;
    file
      .text()
      .then(getLines)
      .then((data) => updateCards(pageCards, data, editKey))
      .then((cards) => setPageCards(cards))
      .catch(console.error);
  }, [file]);

  useEffect(() => {
    if (pageCards.length === 0) setTextValue("");
    else {
      const newText = pageCards
        .map((card) => (card[editKey as keyof TCard] as string) ?? "")
        .reduce((a, b) => `${a}\n${b}`);
      setTextValue(newText);
    }
  }, [pageCards, editKey]);

  return (
    <div className="multi-create-panel container">
      {!preview && (
        <>
          <div className="item-button-box">
            {keys.map((key) => (
              <button
                className={key === editKey ? "selected" : "unSelected"}
                key={key}
                name={key}
                onClick={() => {
                  if (key !== editKey) {
                    const newCards = updateCards(
                      pageCards,
                      splitByLine(textValue),
                      editKey
                    );
                    setPageCards(newCards);
                    setKey(key);
                  }
                }}
              >
                {key}
              </button>
            ))}
          </div>
          <div className="input-box">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleReadClipboard}>read clipboard</button>
          </div>
          <div className="edit-area">
            <Textarea
              numOfLines={pageCards.length}
              value={textValue}
              onValueChange={setTextValue}
            ></Textarea>
          </div>
        </>
      )}
      {preview && (
        <div className="preview-area">
          {["all", ...keys].map((key) => (
            <button
              className={key === previewKey ? "selected" : "unSelected"}
              name={key}
              onClick={() => {
                setPreviewKey(key);
              }}
            >
              {key}
            </button>
          ))}
          {pageCards.length === 0 && <p>no content</p>}
          {/* ordered list for display */}
          <ol className="list">
            {previewKey === "all" &&
              pageCards.map((card) => (
                <li key={card.id}>
                  {keys.map((item) => (
                    <p>
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
        </div>
      )}

      <div className="edit-button-box">
        <button onClick={handleSubmit} hidden={!preview}>
          submit
        </button>
        <button onClick={endPrevirew} hidden={!preview}>
          edit
        </button>
        <button
          onClick={() => {
            const newCards = updateCards(
              pageCards,
              splitByLine(textValue),
              editKey
            );
            setPageCards(newCards);
            startPreview();
          }}
          hidden={preview}
        >
          preview
        </button>
      </div>
    </div>
  );
}
