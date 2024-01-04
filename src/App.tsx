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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<BookPage />} />
      <Route path="list/:id" element={<CardPage />} />
      <Route path="add/:id" element={<CreatePage mode={"add"} />} />
      <Route path="edit/:id" element={<CreatePage mode={"edit"} />} />
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}
