import { useState } from "react";
import { v4 } from "uuid";

type Props<T> = {
  items: T[];
  onClick: (m: T, n: T) => void;
};

export default function ButtonGroup<T>({ items, onClick }: Props<T>) {
  const [selected, setSelected] = useState(items[0]);
  return (
    <>
      {(items as any[]).map((thisItem) => (
        <button
          className={thisItem === selected ? "selected" : "unSelected"}
          key={v4()}
          onClick={() => {
            onClick(selected, thisItem);
            setSelected(thisItem);
          }}
        >
          {thisItem}
        </button>
      ))}
    </>
  );
}
