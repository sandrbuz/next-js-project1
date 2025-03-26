'use client';

import { DndContext, DragOverlay, closestCorners } from '@dnd-kit/core';
import { useState } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import BlueContainer from './BlueContainer.js';

export default function Processes() {
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

  // Активный красный блок для DragOverlay
  const [activeRed, setActiveRed] = useState(null);

  const handleDragStart = (event) => {
    const activeId = event.active.id;
    let found = null;
    for (let blue of blueBlocks) {
      found = blue.redBlocks.find((red) => red.id === activeId);
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

      // Находим исходный контейнер и индекс active элемента
      let sourceContainerIndex = -1;
      let activeItemIndex = -1;
      let activeItem = null;
      for (let i = 0; i < newState.length; i++) {
        const idx = newState[i].redBlocks.findIndex((item) => item.id === activeId);
        if (idx !== -1) {
          sourceContainerIndex = i;
          activeItemIndex = idx;
          activeItem = newState[i].redBlocks[idx];
          break;
        }
      }
      if (!activeItem) return prev;

      // Определяем целевой контейнер по over.id:
      // Если over.id начинается с "red", ищем контейнер, где он находится,
      // иначе если over.id начинается с "blue", то это целевой контейнер.
      let destinationContainerIndex = -1;
      if (overId.startsWith("red")) {
        for (let i = 0; i < newState.length; i++) {
          const idx = newState[i].redBlocks.findIndex((item) => item.id === overId);
          if (idx !== -1) {
            destinationContainerIndex = i;
            break;
          }
        }
      } else if (overId.startsWith("blue")) {
        destinationContainerIndex = newState.findIndex((container) => container.id === overId);
      }
      if (destinationContainerIndex === -1) return prev;

      // Если перенос внутри одного контейнера – используем arrayMove
      if (sourceContainerIndex === destinationContainerIndex) {
        const items = newState[sourceContainerIndex].redBlocks;
        const oldIndex = items.findIndex((item) => item.id === activeId);
        const newIndex = items.findIndex((item) => item.id === overId);
        newState[sourceContainerIndex].redBlocks = arrayMove(items, oldIndex, newIndex);
        return newState;
      }

      // Перемещение между контейнерами:
      // Удаляем элемент из исходного контейнера
      newState[sourceContainerIndex].redBlocks.splice(activeItemIndex, 1);
      // Вставляем его в конец целевого контейнера
      newState[destinationContainerIndex].redBlocks.push(activeItem);

      return newState;
    });
  };

  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className='mx-7 mt-5'>Работает корректно, но при перетаскивании в другой синий блок - перетаскиваемый красный блок становится в конец нового синего. ДРугого поведения с этой библиотекой dnd-kit не смог добиться. 
        Можно попробовать его добавиться с другой библиотекой (gpt советовал react-beautiful-dnd которая перестала разрабатываться, но есть еще и react-dnd). Также при первой загрузке этой страницы вылезает непонятная ошибка в консоли
        , gpt говорит можно проигнорировать. Но во вкладке входные условия такой ошибки нет, хотя я там тож делал драг дроп с библиотекой dnd-kit</div>
      <div className="min-h-[calc(100vh-52px)] p-10 overflow-y-auto">
        {blueBlocks.map((blueBlock) => (
          <BlueContainer key={blueBlock.id} block={blueBlock} />
        ))}
      </div>
      <DragOverlay>
        {activeRed && (
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
        )}
      </DragOverlay>
    </DndContext>
  );
}
