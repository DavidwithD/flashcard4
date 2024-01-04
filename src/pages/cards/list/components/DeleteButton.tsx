import TrashCanIcon from "../../../../components/icons/TrashCanIcon";

export default function DeleteButton({ onClick, fillColor }: any) {
  return (
    <TrashCanIcon
      onClick={() => {
        if (confirm("delete?")) onClick();
      }}
      myClass={"delete-button"}
      fillColor={fillColor}
    />
  );
}
