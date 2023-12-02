'use client'

import React, { useEffect } from 'react'
import { DragDropContext, Draggable } from 'react-beautiful-dnd';

function Board() {
  useEffect(() => {
    // get board
  }, []);

  return (
    <DragDropContext>
      <Draggable droppableId="board" direction="horizontal" type="column">
        {(provided) => 
          <div>
            {/* Render all colmns */}
          </div>
        }
      </Draggable>
    </DragDropContext>
  )
}

export default Board