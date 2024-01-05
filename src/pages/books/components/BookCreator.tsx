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
        <LabeledTextInput
          itemName="name"
          defaultValue={book?.name}
          consumeValue={setName}
        />
        <LabeledTextInput
          itemName="description"
          defaultValue={book?.description}
          consumeValue={setDescription}
        />
        <button className="btn btn-light" onClick={onSubmit}>
          {mode}
        </button>
        {onCancel && (
          <button className="btn btn-light" onClick={onCancel}>
            cancel
          </button>
        )}
      </form>
    </div>
  );
}

function LabeledTextInput({ itemName, defaultValue, consumeValue }: any) {
  return (
    <div className="labeled-text-input">
      <label>
        <span>{itemName}:</span>
        <br />
        <input
          type="text"
          placeholder={itemName}
          defaultValue={defaultValue}
          onChange={(e) => consumeValue(e.target.value)}
        />
      </label>
      <br />
    </div>
  );
}
