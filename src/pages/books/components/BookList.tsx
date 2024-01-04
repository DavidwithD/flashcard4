import { v4 } from "uuid";
import BookCreator from "./BookCreator";
import { TBook } from "../../../types";
import Book from "./Book";
import { useBooks } from "../hooks/usebooks";

export default function BookList() {
  const { books } = useBooks();
  return (
    <div>
      <div className="book-list">
        {(books as TBook[]).map((book: TBook) => (
          <Book key={v4()} book={book} />
        ))}
      </div>
      <BookCreator mode="create" />
    </div>
  );
}
