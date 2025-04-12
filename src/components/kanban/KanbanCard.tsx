// src/components/kanban/KanbanCard.tsx
import { Draggable } from 'react-beautiful-dnd';

export default function KanbanCard({ card, index }) {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          className="bg-gray-100 p-3 rounded shadow"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {card.title}
        </div>
      )}
    </Draggable>
  );
}
