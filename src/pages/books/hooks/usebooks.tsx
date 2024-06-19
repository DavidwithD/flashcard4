import { createContext, useContext, useEffect, useState } from "react";
import { TBook } from "../../../types";
import { saveJson, loadJson } from "../../../utils";
import { v4 } from "uuid";
const bookContext = createContext<any>(null);
export const useBooks: () => {
  books: TBook[];
  getBook: (id: string) => TBook | undefined;
  addBook: (newBook: TBook) => void;
  removeBook: (id: string) => void;
  replaceBook: (id: string, newBook: TBook) => void;
} = () => useContext(bookContext);

export default function BookProvider({ children }: any) {
  const sampleBook = {
    id: 0,
    name: "英語練習",
    description: "簡単な英語翻訳の練習問題",
    cards: [
      {
        id: v4(),
        quiz: "次世代を実装する",
        hint: "",
        answer: "implement next generation",
        note: "generation:世代",
        correct: 0,
        uncorrect: 0,
        rating: 0,
      },
      {
        id: v4(),
        quiz: "新技術で未来を作り出す",
        hint: "名詞の複数",
        answer: "create the future with new technologies",
        note: "technology:技術",
        correct: 0,
        uncorrect: 0,
        rating: 0,
      },
    ],
  };
  const [books, setBooks] = useState<TBook[]>(
    loadJson("books") || [sampleBook]
  );

  const getBook = (id: string): TBook | undefined =>
    books.find((book) => book.id === id);
  const addBook = (newBook: TBook) => setBooks([...books, newBook]);
  const removeBook = (id: string) => setBooks(books.filter((b) => b.id !== id));
  const replaceBook = (id: string, newBook: TBook) => {
    const newBooks = books.map((oldBook) =>
      oldBook.id === id ? newBook : oldBook
    );
    setBooks(newBooks);
  };

  useEffect(() => {
    saveJson("books", books);
  }, [books]);

  return (
    <bookContext.Provider
      value={{ books, getBook, addBook, removeBook, replaceBook }}
    >
      {children}
    </bookContext.Provider>
  );
}
