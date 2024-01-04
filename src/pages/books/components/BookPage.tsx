import BookProvider from "../hooks/usebooks";
import BookList from "./BookList";
import "../style/bookStyle.css";
import Creator from "../../cards/create/components/Creator";

export default function BookPage() {
  return (
    <BookProvider>
      <h2>Books</h2>
      {/* <Backup /> */}
      <BookList />
      <Creator />
    </BookProvider>
  );
}
