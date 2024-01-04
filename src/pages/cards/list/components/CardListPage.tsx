import { useParams } from "react-router-dom";
import CardProvider from "../../create/hooks/useCards";
import CardList from "./CardList";
import BookProvider from "../../../books/hooks/usebooks";
import "../style/Card.css";

export default function CardPage() {
  const { id } = useParams();

  return (
    <BookProvider>
      <CardProvider bookId={id}>
        <CardList id={id} />
      </CardProvider>
    </BookProvider>
  );
}
