import PencilIcon from "../../../../components/icons/PencilIcon";

export default function EditButton({ onClick, fillColor }: any) {
  return (
    <PencilIcon
      onClick={onClick}
      myClass={"edit-button"}
      fillColor={fillColor}
    />
  );
}
