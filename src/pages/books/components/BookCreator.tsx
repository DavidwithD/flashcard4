import { useState } from "react";
import { useBooks } from "../hooks/usebooks";
import { v4 } from "uuid";
export default function BookCreator({ book, mode, onCancel }: any) {
  const [name, setName] = useState<string>(book?.name ?? "");
  const [description, setDescription] = useState<string>(
    book?.description ?? ""
  );
  const { addBook, replaceBook } = useBooks();
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!book) addBook({ id: v4(), name, description, cards: [] });
    else
      replaceBook(book.id, {
        id: book.id,
        name,
        description,
        cards: book.cards,
      });
  };
  return (
    <div className="book-creator">
      <form className="book-creator-form">
        <label>
          <span>name:</span>
          <br />
          <input
            type="text"
            placeholder="name"
            defaultValue={book?.name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          <span>description:</span>
          <br />
          <input
            type="text"
            placeholder="description"
            defaultValue={book?.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button className="btn btn-light" onClick={onSubmit}>
          {mode}
        </button>
        <button className="btn btn-light" onClick={onCancel}>
          cancel
        </button>
      </form>
    </div>
  );
}
