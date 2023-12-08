'use client'

import { useBoardStore } from '@/store/BoardStore';
import { XCircleIcon } from '@heroicons/react/20/solid';
import React from 'react'
import { Draggable, DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from 'react-beautiful-dnd';

type Props = {
  todo: Todo;
  index: number;
  id: TypeColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
}

function TodoCard({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps
}: Props) {
  const deleteTask = useBoardStore((state) => state.deleteTask);
  
  return (
    <div
    className="bg-white rounded-md space-y-2 drop-showdow-md"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <div className="flex justify-between itmes-center p-5">
        <p>{todo.title}</p>
        <button onClick={() => deleteTask(index, todo, id)} className="text-red-600 hover:text-red-600">
          <XCircleIcon className="ml-5 h-8 w-8" />
        </button>
      </div>

      {/* Add image */}
    </div>
  )
}

export default TodoCard