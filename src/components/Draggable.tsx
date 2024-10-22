import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

type DraggableProps = React.PropsWithChildren & {
  id: string;
  element?: React.ElementType;
};

const Draggable: React.FC<DraggableProps> = ({ id, children, element }) => {
  const Element = element || 'div';
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id
    });
  const opacity = isDragging ? 1 : 1;
  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
        opacity: 1,
        touchAction: 'none'
      }
    : undefined;

  return (
    <Element
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      id={id}
      className=" !opacity-100 draggable"
    >
      {children}
    </Element>
  );
};

export default Draggable;
