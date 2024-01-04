import { Link } from "react-router-dom";
import { useBooks } from "../hooks/usebooks";
import BookCreator from "./BookCreator";
import { useState } from "react";
// icons
import PencilIcon from "../../../components/icons/PencilIcon";
import TrashCanIcon from "../../../components/icons/TrashCanIcon";
// css
import "../style/bookStyle.css";

export default function Book({ book }: any) {
  const { removeBook } = useBooks();
  const [edit, setEdit] = useState(false);
  const fillColor = "rgba(0,0,0,0.2)";
  return (
    <div className="book">
      <div className="book-head">
        <PencilIcon
          className={"edit-button"}
          onClick={() => setEdit((prev) => !prev)}
          fillColor={fillColor}
        />
        <TrashCanIcon
          className={"delete-button"}
          onClick={() => removeBook(book.id)}
          fillColor={fillColor}
        />
      </div>
      {!edit && <p>{book.name}</p>}
      {!edit && <p>{book.description}</p>}
      {edit && (
        <BookCreator
          book={book}
          mode={"edit"}
          onCancel={() => setEdit(false)}
        />
      )}
      <Link to={`list/${book.id}`}>open</Link>
    </div>
  );
}
