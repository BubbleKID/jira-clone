'use client'

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
  return (
    <div
    className="bg-white rounded-md space-y-2 drop-showdow-md"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <div className="flex justify-bewteeen itmes-center p-5">
        <p>{todo.title}</p>
        <button className="text-red-600 hover:text-red-600">
          <XCircleIcon className="ml-5 h-8 w-8" />
        </button>
      </div>
    </div>
  )
}

export default TodoCard