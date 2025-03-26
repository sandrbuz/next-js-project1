'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function RedBlock({ red }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: red.id });
  const style = {
    opacity: isDragging ? 0.5 : 1,
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="min-h-[40px] bg-red-400"
      {...listeners}
      {...attributes}
    >
      {red.name}
    </div>
  );
}
