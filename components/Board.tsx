'use client'

import { useBoardStore } from '@/store/BoardStore';
import React, { useEffect } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function Board() {
  const getBoard = useBoardStore((state) => state.getBoard);
  
  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleDragEnd = () => {

  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => 
          <div>
            {/* Render all colmns */}
          </div>
        }
      </Droppable>
    </DragDropContext>
  )
}

export default Board