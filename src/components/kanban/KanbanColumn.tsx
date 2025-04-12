// src/components/kanban/KanbanColumn.tsx
import { Droppable } from 'react-beautiful-dnd';
import KanbanCard from './KanbanCard';

export default function KanbanColumn({ column }) {
  return (
    <div className="bg-white rounded shadow p-4 w-80">
      <h2 className="font-bold mb-2">{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-2 min-h-[100px]">
            {column.cards.map((card, index) => (
              <KanbanCard key={card.id} card={card} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

