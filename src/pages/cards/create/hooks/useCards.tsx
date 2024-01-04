import { createContext, useContext, useEffect, useState } from "react";
import { useBooks } from "../../../books/hooks/usebooks";
import { TBook, TCard } from "../../../../types";
import { v4 } from "uuid";

type TCardContext = {
  book: TBook;
  cards: TCard[];
  newCard: () => TCard;
  addCards: (cards: TCard[]) => any;
  deleteCard: (id: string) => any;
  replaceCard: (card: TCard) => any;
  replaceAllCards: (newCards: TCard[]) => any;
  updateResult: (id: string, isCorrect: boolean) => any;
};

const cardsContext = createContext<any>(null);
export const useCards = (): TCardContext => useContext(cardsContext);

export default function CardProvider({ bookId, children }: any) {
  const { getBook, replaceBook } = useBooks();
  const [book] = useState<TBook>(getBook(bookId));
  const [cards, setCards] = useState<TCard[]>(book?.cards ?? []);

  const newCard = (): TCard => ({
    id: v4(),
    quiz: "",
    hint: "",
    answer: "",
    note: "",
    correct: 0,
    uncorrect: 0,
    rating: 0,
  });
  const addCards = (newCards: TCard[]) => {
    setCards([...cards, ...newCards]);
  };
  const deleteCard = (cardId: string) => {
    setCards(cards.filter((card) => card.id !== cardId));
  };
  const replaceCard = (newCard: TCard) => {
    setCards(cards.map((card) => (card.id === newCard.id ? newCard : card)));
  };
  const replaceAllCards = (newCards: TCard[]) => {
    setCards(newCards);
  };
  const updateResult = (id: string, isCorrect: boolean) => {
    const getPercentage = (part: number, total: number) =>
      Math.round((part / total) * 100);
    setCards(
      cards.map((card) =>
        card.id !== id
          ? { ...card }
          : isCorrect
          ? {
              ...card,
              correct: card.correct + 1,
              rating: getPercentage(
                card.correct + 1,
                card.correct + card.uncorrect + 1
              ),
            }
          : {
              ...card,
              uncorrect: card.uncorrect + 1,
              rating: getPercentage(
                card.correct,
                card.correct + card.uncorrect + 1
              ),
            }
      )
    );
  };

  useEffect(() => {
    replaceBook(bookId, { ...book, cards });
  }, [cards]);

  return (
    <cardsContext.Provider
      value={{
        book,
        cards,
        newCard,
        addCards,
        deleteCard,
        replaceCard,
        replaceAllCards,
        updateResult,
      }}
    >
      {children}
    </cardsContext.Provider>
  );
}
