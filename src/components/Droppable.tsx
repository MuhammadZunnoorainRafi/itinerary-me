import { useDroppable } from '@dnd-kit/core';
import React from 'react';

type DroppableProps = React.PropsWithChildren & {
  id: string;
};

const Droppable: React.FC<DroppableProps> = ({ children, id }) => {
  const { isOver, setNodeRef } = useDroppable({
    id
  });
  return (
    <div
      ref={setNodeRef}
      className={`w-full p-5 border-2 border-dashed border-gray-300 rounded-lg ${
        isOver ? 'bg-gray-100' : ''
      }`}
    >
      {children}
    </div>
  );
};

export default Droppable;
