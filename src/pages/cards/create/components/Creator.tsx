import { useState } from "react";
type TCard = {
  id: string;
  quiz: string;
  answer: string;
};
export default function Creator() {
  let cards = [
    { id: "1", quiz: "1", answer: "10" },
    { id: "2", quiz: "2", answer: "20" },
  ];
  const items: (keyof TCard)[] = ["id", "quiz", "answer"];
  return (
    <ol>
      {cards.map((card, i) => (
        <CardEditForm key={i} card={card} index={i} items={items} />
      ))}
    </ol>
  );
}

function CardEditForm({
  card,
  index,
  items,
}: {
  card: TCard;
  index: number;
  items: (keyof TCard)[];
}) {
  const [editing, setEditing] = useState(false);
  return (
    <li>
      <form
        key={index}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit", index);
          setEditing(false);
        }}
        style={{ textAlign: "left" }}
      >
        <div style={{ display: "inline-block" }}>
          {items.map((item) => (
            <div key={item}>
              <label
                style={{
                  display: "inline-block",
                  width: "100px",
                  textAlign: "right",
                }}
                htmlFor={item + index}
              >
                {item}:
              </label>
              <input
                type="text"
                name={item}
                id={item + index}
                data-index={index}
                defaultValue={card[item]}
                onChange={(e) => {
                  console.log(item, e.target.value);
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
