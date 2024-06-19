import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import BookPage from "./pages/books/components/BookPage";
import CardPage from "./pages/cards/list/components/CardListPage";
import CreatePage from "./pages/cards/create/components/CreatePage";
import TestPage from "./pages/test/TestPage";
import NlpTest from "./pages/english/NlpTest";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="flashcard4">
      <Route index element={<BookPage />} />
      <Route path="list/:id" element={<CardPage />} />
      <Route path="add/:id" element={<CreatePage mode={"add"} />} />
      <Route path="edit/:id" element={<CreatePage mode={"edit"} />} />
      <Route path="test" element={<TestPage />} />
      <Route path="nlp" element={<NlpTest />} />
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}
