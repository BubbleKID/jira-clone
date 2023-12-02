import React from 'react'
import { DragDropContext, Draggable } from 'react-beautiful-dnd';

function Board() {
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