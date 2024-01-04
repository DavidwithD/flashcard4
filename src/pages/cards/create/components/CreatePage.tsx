// providers
import BookProvider from "../../../books/hooks/usebooks";
import CardProvider from "../hooks/useCards";

// components
import { Link, useParams } from "react-router-dom";
import CardsCreator from "./CardsCreator";
// css
import "../style/createPageStyle.css";
type Props = { mode: string };
export default function CreatePage({ mode }: Props) {
  const { id } = useParams();

  return (
    <BookProvider>
      <CardProvider bookId={id}>
        <div className="create-page">
          <section className="create-page-head">
            <h3>Cards</h3>
            <h3>{mode} </h3>
            <Link to={`../list/${id}`}>back</Link>
          </section>
          <CardsCreator mode={mode} />
        </div>
      </CardProvider>
    </BookProvider>
  );
}
