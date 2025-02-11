'use client';
import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';

// Компонент перетаскиваемого элемента (красный блок)
function SortableItem({ id }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    border: '2px solid red',
    padding: '5px',
    marginBottom: '5px',
    backgroundColor: 'white',
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'grab',
    opacity: isDragging ? 0.5 : 1,
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
    minHeight: '50px',
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
    { id: 'blue-3', redBlocks: [] },
  ]);

  const [activeItem, setActiveItem] = useState(null);

  const handleDragStart = (event) => {
    setActiveItem(event.active.id);
  };

  const handleDragEnd = (event) => {
    setActiveItem(null);
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    // Перемещение красных блоков внутри одного синего блока
    const sourceBlue = blueBlocks.find((b) => b.redBlocks.includes(activeId));
    const targetBlue = blueBlocks.find((b) => b.id === overId || b.redBlocks.includes(overId));

    if (sourceBlue && targetBlue && sourceBlue.id === targetBlue.id) {
      setBlueBlocks((prev) => {
        const newState = prev.map((b) => ({ ...b, redBlocks: [...b.redBlocks] }));
        const blueIndex = newState.findIndex((b) => b.id === sourceBlue.id);

        const oldIndex = newState[blueIndex].redBlocks.indexOf(activeId);
        const newIndex = newState[blueIndex].redBlocks.indexOf(overId);

        newState[blueIndex].redBlocks = arrayMove(newState[blueIndex].redBlocks, oldIndex, newIndex);
        return newState;
      });
      return;
    }

    // Перемещение красного блока между синими контейнерами
    if (sourceBlue && targetBlue) {
      setBlueBlocks((prev) => {
        const newState = prev.map((b) => ({ ...b, redBlocks: [...b.redBlocks] }));
        const sourceIndex = newState.findIndex((b) => b.id === sourceBlue.id);
        const targetIndex = newState.findIndex((b) => b.id === targetBlue.id);

        newState[sourceIndex].redBlocks = newState[sourceIndex].redBlocks.filter((id) => id !== activeId);
        newState[targetIndex].redBlocks.push(activeId);

        return newState;
      });
      return;
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <SortableContext items={blueBlocks.map((b) => b.id)} strategy={verticalListSortingStrategy}>
        {blueBlocks.map((blue) => (
          <SortableBlueContainer key={blue.id} id={blue.id}>
            <SortableContext items={blue.redBlocks} strategy={verticalListSortingStrategy}>
              {blue.redBlocks.map((redId) => (
                <SortableItem key={redId} id={redId} />
              ))}
            </SortableContext>
          </SortableBlueContainer>
        ))}
      </SortableContext>

      <DragOverlay>{activeItem ? <SortableItem id={activeItem} /> : null}</DragOverlay>
    </DndContext>
  );
}
