import BookProvider from "../hooks/usebooks";
import BookList from "./BookList";
import "../style/bookStyle.css";

export default function BookPage() {
  return (
    <BookProvider>
      <h2>Books</h2>
      {/* <Backup /> */}
      <BookList />
    </BookProvider>
  );
}
