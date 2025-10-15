import { useDroppable } from "@dnd-kit/core";

const Droppable = (props) => {
  const { isOver, setNodeRef } = useDroppable({ id: props.id });

  return (
    <div ref={setNodeRef} {...props} style={{ ...props.style, backgroundColor: (isOver ? "red" : "transparent"), color: "white" }} >
      {props.children}
    </div>
  );
}

export default Droppable;
