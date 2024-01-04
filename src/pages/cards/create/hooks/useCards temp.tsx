import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useBooks } from "../../../books/hooks/usebooks";
import { TCard } from "../../../../types";
const cardsContext = createContext<any>(null);
export const useCards = () => useContext(cardsContext);

export default function CardProvider({ bookId, children }: any) {
  const { getBook, replaceBook } = useBooks();
  const [book] = useState(getBook(bookId));
  const initMap = new Map<string, TCard>();
  if (book)
    (book.cards as TCard[]).forEach((card) => initMap.set(card.id, card));
  const [map, setMap] = useState<Map<string, TCard>>(new Map(initMap));

  const addCards = (newCards: TCard[]) => {
    console.log("add cards");
    newCards.forEach((card) => map.set(card.id, card));
    setMap(new Map(map));
  };
  const deleteCard = (cardId: string) => {
    map.delete(cardId);
    setMap(new Map(map));
  };
  const replaceCard = (newCard: TCard) => {
    map.set(newCard.id, newCard);
    setMap(new Map(map));
  };

  const replaceAll = (newCards: TCard[]) => {
    const map = new Map<string, TCard>();
    newCards.forEach((card) => map.set(card.id, card));
    setMap(map);
  };

  const cards = useMemo(() => Array.from(map.values()), [map]);

  useEffect(() => {
    console.log("repalce book");
    replaceBook(bookId, { ...book, cards });
  }, [map]);

  return (
    <cardsContext.Provider
      value={{
        book,
        cards,
        addCards,
        deleteCard,
        replaceCard,
        replaceAll,
      }}
    >
      {children}
    </cardsContext.Provider>
  );
}
