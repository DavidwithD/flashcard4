import { useState } from "react";
import DeleteButton from "../../pages/cards/list/components/DeleteButton";
import EditButton from "../../pages/cards/list/components/EditButton";
import "./ButtonBox.css";

export default function ButtonBox({ onEdit, onDelete }: any) {
  const [fillColor, setFillColor] = useState("rgba(0,0,0,0.2)");
  return (
    <div
      className="button-box"
      onMouseOver={() => setFillColor("rgba(0,0,0,0.7)")}
      onMouseLeave={() => setFillColor("rgba(0,0,0,0.2)")}
    >
      <EditButton onClick={onEdit} fillColor={fillColor} />
      <DeleteButton onClick={onDelete} fillColor={fillColor} />
    </div>
  );
}
