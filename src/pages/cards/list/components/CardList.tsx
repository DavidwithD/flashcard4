import { PureCard } from "./Card";
import { Link } from "react-router-dom";
import { useCards } from "../../create/hooks/useCards";
import { memo, useState } from "react";
import { TCard } from "../../../../types";
import ThemeSelector from "../../../../components/ThemeSelector/ThemeSelector";

const CardList = memo(function CardList({ id }: any) {
  const { cards, book } = useCards();
  const [mode, setMode] = useState("practice");
  const [compareFn, setCompareFn] = useState<
    ((a: TCard, b: TCard) => number) | undefined
  >(() => undefined);
  const copy = [...cards];
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
        <br />
        <label>
          mode:
          <select onChange={(e) => setMode(e.target.value)}>
            <option>practice</option>
            <option>preview</option>
          </select>
        </label>
        <span> </span>
        <label>
          sort:
          <select
            onChange={(e) => {
              let sort = e.target.value;
              switch (sort) {
                case "default":
                  console.log("default");
                  setCompareFn(() => undefined);
                  break;
                case "ascendent":
                  console.log("ascendent");
                  setCompareFn(
                    () => (a: TCard, b: TCard) => a.rating - b.rating
                  );
                  break;
                case "descendent":
                  console.log("descendent");
                  setCompareFn(
                    () => (a: TCard, b: TCard) => b.rating - a.rating
                  );
                  break;
              }
            }}
          >
            <option>default</option>
            <option>ascendent</option>
            <option>descendent</option>
          </select>
        </label>
      </header>
      <div className="cards">
        {cards.length === 0 && <h4>Please create new cards</h4>}
        {copy.sort(compareFn).map((card: TCard) => (
          <PureCard key={card.id} card={card} mode={mode} />
        ))}
      </div>
    </div>
  );
});

export default CardList;
