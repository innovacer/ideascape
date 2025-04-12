import { Droppable } from 'react-beautiful-dnd';
import KanbanCard from './KanbanCard';

export default function KanbanColumn({ column }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 min-w-80 flex-shrink-0">
      <h2 className="font-semibold mb-3">{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-3">
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
