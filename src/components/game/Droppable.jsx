import { useDroppable } from "@dnd-kit/core";

const Droppable = (props) => {
  const { setNodeRef } = useDroppable({ id: props.id });

  return (
    <div ref={setNodeRef} {...props} >
    </div>
  );
}

export default Droppable;
