'use client'

import { DndContext, DragOverlay, closestCenter } from '@dnd-kit/core';
import BlueContainer from './BlueContainer.js';
import { useState } from 'react';
import { arrayMove } from '@dnd-kit/sortable';

const Processes = () => {
  const [blueBlocks, setBlueBlocks] = useState([
    {
      id: 'blue1',
      name: 'Синий блок 1',
      redBlocks: [
        { id: 'red1', name: 'red1' },
        { id: 'red2', name: 'red2' },
        { id: 'red3', name: 'red3' },
        { id: 'red4', name: 'red4' },
        { id: 'red5', name: 'red5' },
      ],
    },
    {
      id: 'blue2',
      name: 'Синий блок 2',
      redBlocks: [
        { id: 'red6', name: 'red6' },
        { id: 'red7', name: 'red7' },
        { id: 'red8', name: 'red8' },
      ],
    },
    {
      id: 'blue3',
      name: 'Синий блок 3',
      redBlocks: [],
    },
  ]);

  // Сохраняем объект перетаскиваемого красного блока
  const [activeRed, setActiveRed] = useState(null);

  const handleDragStart = (event) => {
    const activeId = event.active.id;
    // Ищем красный блок по id (предполагается, что id синего начинаются с "blue", а красного – с "red")
    let found = null;
    for (let blue of blueBlocks) {
      found = blue.redBlocks.find(red => red.id === activeId);
      if (found) break;
    }
    setActiveRed(found);
  };

  const handleDragEnd = ({ active, over }) => {
    setActiveRed(null);
    if (!over) return;
    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    setBlueBlocks((prev) => {
      const newState = structuredClone(prev);

      // Находим исходный контейнер и индекс красного блока
      let sourceBlockIndex = -1;
      let activeItemIndex = -1;
      let activeItem = null;
      for (let i = 0; i < newState.length; i++) {
        const index = newState[i].redBlocks.findIndex(item => item.id === activeId);
        if (index !== -1) {
          sourceBlockIndex = i;
          activeItemIndex = index;
          activeItem = newState[i].redBlocks[index];
          break;
        }
      }
      if (!activeItem) return prev;

      // Ищем контейнер, в котором находится over.id
      let destinationBlockIndex = -1;
      let overItemIndex = null;
      for (let i = 0; i < newState.length; i++) {
        const index = newState[i].redBlocks.findIndex(item => item.id === overId);
        if (index !== -1) {
          destinationBlockIndex = i;
          overItemIndex = index;
          break;
        }
      }

      // Если over.id соответствует id синего контейнера (drop на пустой области)
      if (destinationBlockIndex === -1) {
        destinationBlockIndex = newState.findIndex(block => block.id === overId);
        if (destinationBlockIndex === -1) return prev;
        newState[sourceBlockIndex].redBlocks.splice(activeItemIndex, 1);
        newState[destinationBlockIndex].redBlocks.push(activeItem);
        return newState;
      }

      // Если перетаскивание внутри одного контейнера – используем arrayMove
      if (sourceBlockIndex === destinationBlockIndex) {
        const items = newState[sourceBlockIndex].redBlocks;
        const oldIndex = items.findIndex(item => item.id === activeId);
        const newIndex = items.findIndex(item => item.id === overId);
        newState[sourceBlockIndex].redBlocks = arrayMove(items, oldIndex, newIndex);
        return newState;
      }

      // Перемещение между контейнерами:
      newState[sourceBlockIndex].redBlocks.splice(activeItemIndex, 1);
      newState[destinationBlockIndex].redBlocks.splice(overItemIndex, 0, activeItem);
      return newState;
    });
  };

  return (
    <DndContext 
      collisionDetection={closestCenter} 
      onDragStart={handleDragStart} 
      onDragEnd={handleDragEnd}
    >
      <div className="min-h-[calc(100vh-52px)] p-10 overflow-y-auto">
        {blueBlocks.map((blueBlock) => (
          <BlueContainer key={blueBlock.id} block={blueBlock} />
        ))}
      </div>
      <DragOverlay>
        {activeRed ? (
          <div 
            style={{ 
              minHeight: '40px', 
              backgroundColor: '#f87171', 
              padding: '5px',
              border: '1px solid #dc2626',
            }}
          >
            {activeRed.name}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

export default Processes;
