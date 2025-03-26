'use client';

import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import RedBlock from './RedBlock.js';

export default function BlueContainer({ block }) {
  const { setNodeRef } = useDroppable({ id: block.id });
  return (
    <div
      ref={setNodeRef}
      style={{ backgroundColor: '#3b82f6' }}
      className="my-10 p-4 min-h-[50px] flex flex-col gap-5"
    >
      <SortableContext
        id={block.id}
        items={block.redBlocks.map((red) => red.id)}
        strategy={verticalListSortingStrategy}
      >
        {block.redBlocks.map((red) => (
          <RedBlock key={red.id} red={red} />
        ))}
      </SortableContext>
    </div>
  );
}
