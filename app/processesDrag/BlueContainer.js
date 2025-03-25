'use client'

import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import RedBlock from './RedBlock.js';

const BlueContainer = ({ block }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: block.id, 
  });

  const style = {
    backgroundColor: isOver ? '#3b82f680' : '#3b82f6',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="my-10 p-4 min-h-[200px] flex flex-col gap-5"
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

export default BlueContainer;
