import { createContext, useContext, useEffect, useState } from "react";
import { TBook } from "../../../types";
import { saveJson, loadJson } from "../../../utils";
const bookContext = createContext<any>(null);
export const useBooks: () => {
  books: TBook[];
  getBook: (id: string) => TBook | undefined;
  addBook: (newBook: TBook) => void;
  removeBook: (id: string) => void;
  replaceBook: (id: string, newBook: TBook) => void;
} = () => useContext(bookContext);

export default function BookProvider({ children }: any) {
  const [books, setBooks] = useState<TBook[]>(loadJson("books") || []);

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
