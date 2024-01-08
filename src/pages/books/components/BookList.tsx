import { v4 } from "uuid";
import BookCreator from "./BookCreator";
import { TBook } from "../../../types";
import Book from "./Book";
import { useBooks } from "../hooks/usebooks";

export default function BookList() {
  const { books } = useBooks();
  return (
    <div>
      {books.length === 0 && <h3>Please create a new book.</h3>}
      <div className="book-list">
        {(books as TBook[]).map((book: TBook) => (
          <Book key={v4()} book={book} />
        ))}
        <BookCreator mode="create" />
      </div>
    </div>
  );
}
