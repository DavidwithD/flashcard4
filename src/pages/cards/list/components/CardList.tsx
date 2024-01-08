import { PureCard } from "./Card";
import { Link } from "react-router-dom";
import { useCards } from "../../create/hooks/useCards";
import { memo, useEffect, useState } from "react";
import { TCard } from "../../../../types";
import ThemeSelector from "../../../../components/ThemeSelector/ThemeSelector";
type TMode = "practice" | "preview";
type TSort = keyof TCard | "default";
type TOrder = "ascending" | "descending";

const CardList = memo(function CardList({ id }: any) {
  const { cards, book } = useCards();
  const [mode, setMode] = useState<TMode>(localStorage["mode"] ?? "practice");
  const [sort, setSort] = useState<TSort>(localStorage["sort"] ?? "default");
  const [order, setOrder] = useState<TOrder>(
    localStorage["order"] ?? "ascending"
  );
  const [list, setList] = useState([...cards]);
  const sortList = (list: TCard[], sort: TSort, order: TOrder): TCard[] => {
    const copy = [...list];
    if (sort === "default") return copy;

    const sign = order === "ascending" ? 1 : -1;
    return copy.sort((a: TCard, b: TCard) =>
      typeof a[sort] === "number"
        ? sign * ((a[sort] as number) - (b[sort] as number))
        : sign * a[sort].toString().localeCompare(b[sort].toString())
    );
  };

  const resetList = () => setList(sortList(cards, sort, order));

  useEffect(() => resetList(), [sort, order]);
  useEffect(() => {
    if (sort === "default") resetList();
  }, [cards]);

  return (
    <div className="card-page">
      <header>
        <ThemeSelector />
        <h3>{book.name}</h3>
        <p>total {cards.length} cards</p>

        <Link to={"../"}>back</Link>
        <span> </span>
        <Link to={"../add/" + id}>add new</Link>
        <span> </span>
        <Link to={"../edit/" + id}>edit all</Link>
        <div className="option-form">
          <Select
            itemName="mode"
            options={["practice", "preview"]}
            f={setMode}
          />
          <Select
            itemName="sort"
            options={[
              "default",
              "quiz",
              "answer",
              "correct",
              "uncorrect",
              "rating",
            ]}
            f={setSort}
          />

          {sort !== "default" && (
            <Select
              itemName="order"
              options={["ascending", "descending"]}
              f={setOrder}
            />
          )}
          {sort !== "default" && (
            <button className="btn btn-light" onClick={resetList}>
              refresh
            </button>
          )}
        </div>
      </header>
      <div className="cards">
        {cards.length === 0 && <h4>Please create new cards</h4>}
        {list.map((card: TCard) => (
          <PureCard key={card.id} card={card} mode={mode} sort={sort} />
        ))}
      </div>
    </div>
  );
});

export default CardList;

type SelectProps = {
  itemName: string;
  options: string[];
  f: (arg: any) => void;
};
function Select<T>({ itemName, options, f }: SelectProps) {
  const [selected, setSelected] = useState(
    localStorage[itemName] ?? options[0]
  );
  return (
    <label>
      {itemName}:
      <select
        onChange={(e) => {
          var value = e.target.value as T;
          setSelected(value as string);
          localStorage["currentCard"] = "";
          localStorage[itemName] = value;
          f(value);
        }}
        value={selected}
      >
        {options.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </select>
    </label>
  );
}
