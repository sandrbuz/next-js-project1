

'use client'
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';

// Компонент перетаскиваемого элемента (красный блок)
function SortableItem({ id }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    border: '2px solid red',
    padding: '5px',
    marginBottom: '5px',
    backgroundColor: 'white',
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'grab',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
}

// Контейнер для синего блока (сделан перетаскиваемым)
function SortableBlueContainer({ id, children }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    border: '2px solid blue',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: 'lightblue',
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'grab',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}

export default function DragDropPage() {
  const [blueBlocks, setBlueBlocks] = useState([
    { id: 'blue-1', redBlocks: ['red-1', 'red-2'] },
    { id: 'blue-2', redBlocks: ['red-3'] },
    { id: 'blue-3', redBlocks: [] }
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    // Перемещение синих блоков
    const blueIndexFrom = blueBlocks.findIndex(b => b.id === activeId);
    const blueIndexTo = blueBlocks.findIndex(b => b.id === overId);

    if (blueIndexFrom !== -1 && blueIndexTo !== -1) {
      setBlueBlocks((prev) => arrayMove(prev, blueIndexFrom, blueIndexTo));
      return;
    }

    // Перемещение красных блоков между синими блоками
    let sourceBlue = blueBlocks.find(b => b.redBlocks.includes(activeId));
    let targetBlue = blueBlocks.find(b => b.id === overId || b.redBlocks.includes(overId));

    if (sourceBlue && targetBlue) {
      setBlueBlocks((prev) => {
        const newState = prev.map(b => ({ ...b, redBlocks: [...b.redBlocks] }));
        const sourceIndex = newState.findIndex(b => b.id === sourceBlue.id);
        const targetIndex = newState.findIndex(b => b.id === targetBlue.id);
        
        newState[sourceIndex].redBlocks = newState[sourceIndex].redBlocks.filter(id => id !== activeId);
        newState[targetIndex].redBlocks.push(activeId);

        return newState;
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={blueBlocks.map(b => b.id)} strategy={verticalListSortingStrategy}>
        {blueBlocks.map((blue) => (
          <SortableBlueContainer key={blue.id} id={blue.id}>
            <SortableContext items={blue.redBlocks} strategy={verticalListSortingStrategy}>
              {blue.redBlocks.map(redId => (
                <SortableItem key={redId} id={redId} />
              ))}
            </SortableContext>
          </SortableBlueContainer>
        ))}
      </SortableContext>
    </DndContext>
  );
}
