import { useDraggable } from "@dnd-kit/core";
import { CSS } from '@dnd-kit/utilities';

const Draggable = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    ...props.style
  };

  return (
    <div
      ref={setNodeRef}
      className={props.className}
      style={style}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </div>
  );
}

export default Draggable;
